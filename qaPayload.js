const { Queue } = require('bullmq')

const { voiceQueue } = require('./config/data')
const { redisConnection } = require('./config/redisConfig')


const queuedPayload = {
    prefix: 'MTKZ',
    apikey: 'jxqA2OvBovo6VLRb',
    ts: 1677818521479,
    event: 'queued',
    requestid: 'kBJCkhdQOd1Zr4s',
    number: '918081701067',
    campaign: '212987',
    provider: 'voice-obd-tatatele'
}
const queuedPayload1 = {
    prefix: 'MTKZ',
    apikey: 'jxqA2OvBovo6VLRb',
    ts: 1677818521479,
    event: 'queued',
    requestid: 'kBJCkhdQOd1Zr4s',
    number: '919205732793',
    campaign: '212987',
    provider: 'voice-obd-tatatele'
}

const acceptedPayload = {
    prefix: 'MTKZ',
    apikey: 'jxqA2OvBovo6VLRb',
    ts: 1677818544680,
    event: 'accepted',
    requestid: 'kBJCkhdQOd1Zr4s',
    number: '918081701067',
    campaign: '212987',
    provider: 'voice-obd-tatatele'
}
const acceptedPayload1 = {
    prefix: 'MTKZ',
    apikey: 'jxqA2OvBovo6VLRb',
    ts: 1677818544680,
    event: 'accepted',
    requestid: 'kBJCkhdQOd1Zr4s',
    number: '919205732793',
    campaign: '212987',
    provider: 'voice-obd-tatatele'
}

try {
    // Creating queue
    const myQueue = new Queue(voiceQueue.eventsVoiceCallPatchTatatele, {
        connection: redisConnection
    })

    async function addJobs() {
        await myQueue.add('callObject', JSON.stringify(queuedPayload))
        // await myQueue.add('callObject', JSON.stringify(queuedPayload1))
        await myQueue.add('callString', JSON.stringify(acceptedPayload))
        // await myQueue.add('callString', JSON.stringify(acceptedPayload1))
    }

    addJobs()
    // console.log(`Payload added to queue: ${voiceQueue.eventsVoiceObdTatatele}`)

} catch (err) {
    console.log(`Error Creating ${voiceQueue.eventsVoiceObdTatatele} :`, err)
}