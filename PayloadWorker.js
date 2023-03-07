const axios = require('axios')
const Redis = require('ioredis')

const { Queue, Worker } = require('bullmq')

const { voiceUrls, voiceQueue, DefaultTTL } = require('./config/data')
const { dbName } = require('./config/mongoConfig')

const { redisConnection } = require('./config/redisConfig')

try {

    // Creating redis connection

    const redis = new Redis(redisConnection)

    // Creating voice-callpatch-tatatele worker

    const worker = new Worker(
        voiceQueue.voiceCallPatchTatatele,
        async (job) => {

            //console.log(job.data);
            console.log(`Consumed data from ${voiceQueue.voiceCallPatchTatatele} queue`)
            // console.log(job.data)
            const payload = JSON.parse(job.data)
            console.log(payload)

            const { requestid, apikey } = payload

            const { integration } = payload.data

            // callpatch payload 
            const callpatchPayload = {
                "agent_number": payload.data.from,
                "destination_number": payload.data.to,
                "caller_id": payload.data.caller_id,
                "call_timeout": payload.data.call_timeout,
                // "custom_identifier": null,
                // "async": null,
                "get_call_id": payload.data.get_call_id,
            }
            // callpatch headers
            const voiceApiHeaders = {
                "accept": "application/json",
                "Authorization": integration.params.token,
                "content-type": "application/json",
            }

            try {
                // Calling the API using axios
                const resp = await axios.post(voiceUrls.MTALKZ_VOICE_CALLPATCH_API, callpatchPayload, {
                    headers: voiceApiHeaders,
                })

                // console.log("##########################");
                // console.log(resp.data);

                // Checking if the call is picked or not

                if ('call_id' in resp.data) {

                    // console.log("inside call picked***********************");

                    const call_id = resp.data.call_id
                    const number = payload.data.to
                    // console.log("call_id: " + call_id)

                    const mapKey = `REQMAP:voice:${call_id}}`
                    console.log("mapkey: " + mapKey)
                    const mapValue = { requestid, call_id, apikey, number }
                    console.log("mapvalue: " + mapValue)
                    await redis.set(mapKey, JSON.stringify(mapValue), 'ex', DefaultTTL)
                    console.log("after setting redis key 1***********************");

                    const numKey = `REQM:${apikey}:${requestid}:${number}`
                    const numValue = { number: payload.data.to, status: "call_originated", call_id }
                    await redis.set(numKey, JSON.stringify(numValue), 'ex', DefaultTTL)

                    // console.log("after setting redis key 2***********************");

                    const myQueue = new Queue(voiceQueue.eventsVoiceCallPatchTatatele, {
                        connection: redisConnection
                    })

                    // console.log("after creating event queue***********************");

                    const eventQueuePayload = {
                        prefix: dbName,
                        apikey,
                        ts: Date.now(),
                        event: 'call_originated',
                        requestid,
                        number: payload.data.to,
                        campaign: payload.data.campaign,
                        provider: integration.provider,
                    }

                    // console.log(eventQueuePayload);

                    // addJobs()
                    await myQueue.add(requestid, JSON.stringify(eventQueuePayload))

                    // console.log("after adding to event queue***********************");
                }
                // If agent cuts the call
                else {

                    const number = payload.data.to

                    const numKey = `REQM:${apikey}:${requestid}:${number}`
                    const numValue = { requestid, number, status: "call_rejected" }
                    await redis.set(numKey, JSON.stringify(numValue), 'ex', DefaultTTL)

                    const myQueue = new Queue(voiceQueue.eventsVoiceCallPatchTatatele, {
                        connection: redisConnection
                    })

                    const eventQueuePayload = {
                        prefix: dbName,
                        apikey,
                        ts: Date.now(),
                        event: 'call_rejected',
                        requestid,
                        number: payload.data.to,
                        campaign: payload.data.campaign,
                        provider: integration.provider,
                    }

                    // addJobs()
                    await myQueue.add(requestid, JSON.stringify(eventQueuePayload))
                }
            } catch (err) {
                // Error if call is not picked

                const number = payload.data.to

                const numKey = `REQM:${apikey}:${requestid}:${number}`
                const numValue = { requestid, number, status: "call_missed" }
                await redis.set(numKey, JSON.stringify(numValue), 'ex', DefaultTTL)

                const myQueue = new Queue(voiceQueue.eventsVoiceCallPatchTatatele, {
                    connection: redisConnection
                })

                const eventQueuePayload = {
                    prefix: dbName,
                    apikey,
                    ts: Date.now(),
                    event: 'call_missed',
                    requestid,
                    number: payload.data.to,
                    campaign: payload.data.campaign,
                    provider: integration.provider,
                }

                // addJobs()
                await myQueue.add(requestid, JSON.stringify(eventQueuePayload))
            }


            // Checking if the call is picked or not

            // if ('call_id' in callResponse) {
            //     const mapKey = `REQMAP:voice:${callResponse.call_id}`
            //     // const mapValue = { requestid, callid, apikey, number }
            //     await redis.set(mapKey, JSON.stringify(callResponse), 'ex', DefaultTTL)

            //     const numKey = `REQM:${callResponse.apikey}:${callResponse.requestid}:${callResponse.number}`
            //     await redis.set(numKey, JSON.stringify(callResponse), 'ex', DefaultTTL)
            // }

            // Creating event queue for storing the response

            // const myQueue = new Queue(voiceQueue.eventsvoiceCallPatchTatatele, {
            //     connection: redisConnection
            // })

            // // Adding response to the queue

            // await myQueue.add('callResponse', JSON.stringify(callResponse))

            // console.log(` Response from the call is: ${JSON.stringify(callResponse)}`)
        },
        // Setting the concurrency level
        { concurrency: 10 },
    )

    // Catching Error
} catch (err) {
    console.log('Error', err)
}