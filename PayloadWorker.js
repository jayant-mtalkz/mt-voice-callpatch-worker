const axios = require('axios')
const Redis = require('ioredis')

const { Queue, Worker } = require('bullmq')

const { voiceUrls, voiceQueue, responses, DefaultTTL } = require('./data')

const { redisConnection } = require('./config/redisConfig')

try {

    // Creating redis connection

    const redis = new Redis(redisConnection)

    // Creating voice-callpatch-tatatele worker

    const worker = new Worker(
        voiceQueue.callpatch,
        async (job) => {

            //console.log(job.data);
            console.log(`Consumed data from ${voiceQueue.callpatch} queue`)
            console.log(job.data)

            // Getting response from tatatele
            const callResponse = await callPatchFunction(job.data)

            // Checking if the call is picked or not

            if ('call_id' in callResponse) {
                const mapKey = `REQMAP:voice:${callResponse.call_id}`
                await redis.set(mapKey, JSON.stringify(callResponse), 'ex', DefaultTTL)

                const numKey = `REQM:${callResponse.apikey}:${callResponse.requestid}:${callResponse.number}`
                await redis.set(numKey, JSON.stringify(callResponse), 'ex', DefaultTTL)
            }

            // Creating event queue for storing the response

            const myQueue = new Queue(voiceQueue.events, {
                connection: redisConnection
            })

            // Adding response to the queue

            await myQueue.add('callResponse', callResponse)

            // console.log(` Response from the call is: ${JSON.stringify(callResponse)}`)
        },

        // Setting the concurrency level
        { concurrency: 10 },
    )

    // Catching Error
} catch (err) {
    console.log('Error', err)
}


// Function for calling API and getting response

const callPatchFunction = async (payloadData) => {

    // Getting required data from payload

    const { requestid, apikey } = payloadData

    const { from, to, caller_id, call_timeout, get_call_id, integration } = payloadData.data

    const { token } = integration.params

    // callpatch payload 
    const callpatchPayload = {
        "agent_number": from,
        "destination_number": to,
        "caller_id": caller_id,
        "call_timeout": call_timeout,
        // "custom_identifier": null,
        // "async": null,
        "get_call_id": get_call_id,
    }

    // console.log("call patch payload :::::::::::::::::::::", callpatchPayload)

    // callpatch headers
    const voiceApiHeaders = {
        "accept": "application/json",
        "Authorization": token,
        "content-type": "application/json",
    }

    try {

        // Calling the API using axios
        const resp = await axios.post(voiceUrls.MTALKZ_VOICE_CALLPATCH_API, callpatchPayload, {
            headers: voiceApiHeaders,
        })

        // Checking if the call is picked or not

        if ('call_id' in resp.data) {

            let result = responses.picked

            result['requestid'] = requestid
            result['apikey'] = apikey
            result['number'] = to
            result['call_id'] = resp.data.call_id

            // console.log(` Response from the call is: ${JSON.stringify(result)}`)

            return result
        }

        // If agent cuts the call
        else {

            let result = responses.callCut


            result['requestid'] = requestid
            result['apikey'] = apikey
            result['number'] = to

            // console.log(` Response from the call is: ${JSON.stringify(result)}`)

            return result
        }
    } catch (err) {

        // Error if call is not picked

        let result = responses.notPicked

        result['requestid'] = requestid
        result['apikey'] = apikey
        result['number'] = to

        // console.log(` Response from the call is: ${JSON.stringify(result)}`)

        return result
    }
}