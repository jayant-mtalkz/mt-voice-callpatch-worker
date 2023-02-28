// callPatch url
const voiceUrls = {
    MTALKZ_VOICE_CALLPATCH_API: "https://api-smartflo.tatateleservices.com/v1/click_to_call",
}

const voiceQueue = {
    callpatch: "voice-callpatch-tatatele",
    events: "events-voice-callpatch-tatatele",
}

const responses = {
    notPicked: {
        requestid: null,
        apikey: null,
        number: null,
        status: false,
        message: "Call not picked by agent",
    },
    picked: {
        requestid: null,
        apikey: null,
        number: null,
        call_id: null,
        status: true,
        message: "Originate successfully queued",
    },
    callCut: {
        requestid: null,
        apikey: null,
        number: null,
        status: false,
        message: "Call missed by agent",
    }
}

const DefaultTTL = 7 * 24 * 60 * 60

module.exports = {
    voiceUrls,
    voiceQueue,
    responses,
    DefaultTTL,
}