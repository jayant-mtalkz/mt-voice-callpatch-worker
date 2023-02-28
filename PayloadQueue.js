const { Queue } = require('bullmq')

const { voiceQueue } = require('./data')
const { redisConnection } = require('./config/redisConfig')

// worker payload

const queuePayload = {
    "requestid": "kBJCkhdQOd1Zr4s",
    "apikey": "jxqA2OvBovo6VLRb",
    "data": {
        // "from": "6395938635",
        // "to": "6395938635",

        // "from": "9205732793",
        // "to": "9205732793",

        "from": "8081701067",
        "to": "8081701067",

        "campaign": "279648",
        "caller_id": "918069859000",
        "call_timeout": 120,
        "get_call_id": 1,
        "integration": {
            "provider": "voice-callpatch-tatatele",
            "params": {
                "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNTAwNiwiaXNzIjoiaHR0cHM6XC9cL2Nsb3VkcGhvbmUudGF0YXRlbGVzZXJ2aWNlcy5jb21cL3Rva2VuXC9nZW5lcmF0ZSIsImlhdCI6MTY3NTE0OTg3MSwiZXhwIjoxOTc1MTQ5ODcxLCJuYmYiOjE2NzUxNDk4NzEsImp0aSI6IlREbm1MT0tZZlJkWGdtZmwifQ.NWeV7vlXeObBl1IDdUt-omCySLcPjT32__4vj9_BcbQ",
            },
        },
        "channel": "voice",
    },
}


try {
    // Creating queue
    const myQueue = new Queue(voiceQueue.callpatch, {
        connection: redisConnection
    })

    async function addJobs() {
        await myQueue.add('call', queuePayload)
    }

    addJobs()
    // console.log(`Payload added to queue: ${voiceQueue.callpatch}`)

} catch (err) {
    console.log(`Error Creating ${voiceQueue.callpatch} :`, err)
}
module.exports = queuePayload