const axios = require('axios')
const Redis = require('ioredis')

const { Queue, Worker } = require('bullmq')

const { voiceUrls, voiceApiHeaders, callpatchPayload, voiceQueue, responses, DefaultTTL } = require('./data')


try {

    const myQueue = new Queue(voiceQueue.events, {
        connection: {
            host: '127.0.0.1',
            port: 6379,
        }
    })

    const redis = new Redis({
        host: '127.0.0.1',
        port: 6379,
    })


    try {
        const worker = new Worker(voiceQueue.callpatch, async job => {
            //console.log(job.data);
            console.log(`Consumed data from ${voiceQueue.callpatch} queue`)
            console.log(job.data)
            const callResponse = await callPatchFunction(job.data)
            // console.log("::::::::::::worker-running::::::::::", res)

            if ('call_id' in callResponse) {
                const mapKey = `REQMAP:voice:${callResponse.call_id}`
                await redis.set(mapKey, JSON.stringify(callResponse), 'ex', DefaultTTL)
            }

            await myQueue.add('callResponse', callResponse)

            // console.log(` Response from the call is: ${JSON.stringify(callResponse)}`)

        })
    } catch (err) {
        console.log("Error Creating Worker :", err)
    }


    // async function addJobs() {
    //     await myQueue.add('callResponse', callResponse)
    // }

    // addJobs()

    // console.log(`Payload added to queue: ${voiceQueue.events}`)

} catch (err) {
    console.log(`Error Creating ${voiceQueue.events} :`, err)
}


const callPatchFunction = async (payloadData) => {

    const { requestid, apikey } = payloadData

    const { from, to, caller_id, call_timeout, get_call_id, integration } = payloadData.data

    const { token } = integration.params

    callpatchPayload['agent_number'] = from
    callpatchPayload['destination_number'] = to
    callpatchPayload['caller_id'] = caller_id
    callpatchPayload['call_timeout'] = call_timeout
    callpatchPayload['get_call_id'] = get_call_id

    // console.log("call patch payload :::::::::::::::::::::", callpatchPayload)

    voiceApiHeaders['Authorization'] = token

    try {

        const resp = await axios.post(voiceUrls.MTALKZ_VOICE_CALLPATCH_API, callpatchPayload, {
            headers: voiceApiHeaders
        })

        // console.log("resp data ::::::::::#########::::::::::::", resp.data)
        //console.log(resp)

        if ('call_id' in resp.data) {

            let result = responses.picked

            result['requestid'] = requestid
            result['apikey'] = apikey
            result['number'] = to
            result['call_id'] = resp.data.call_id

            // console.log(` Response from the call is: ${JSON.stringify(result)}`)

            return result
        }
        else {

            let result = responses.callCut


            result['requestid'] = requestid
            result['apikey'] = apikey
            result['number'] = to

            // console.log(` Response from the call is: ${JSON.stringify(result)}`)

            return result
        }

    } catch (err) {

        let result = responses.notPicked

        result['requestid'] = requestid
        result['apikey'] = apikey
        result['number'] = to

        // console.log(` Response from the call is: ${JSON.stringify(result)}`)

        return result
    }
}