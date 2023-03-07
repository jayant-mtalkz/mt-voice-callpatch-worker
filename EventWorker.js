const { Worker } = require('bullmq');
const { voiceQueue } = require('./config/data')

const { MongoClient } = require('mongodb')


const worker = new Worker(voiceQueue.eventsVoiceCallPatchTatatele, async job => {
    console.log(`Consumed data from ${voiceQueue.eventsVoiceCallPatchTatatele} queue`)
    // console.log(job.data)
    const eventData = JSON.parse(job.data)
    console.log(eventData)
})
