// callPatch url
const voiceUrls = {
    MTALKZ_VOICE_CALLPATCH_API: "https://api-smartflo.tatateleservices.com/v1/click_to_call",
}

const voiceQueue = {
    callpatch: "voice-callpatch-tatatele",
    events: "events-voice-callpatch-tatatele",
}

// callpatch headers
const voiceApiHeaders = {
    "accept": "application/json",
    "Authorization": null,
    "content-type": "application/json",
}

// callpatch payload 
const callpatchPayload = {
    "agent_number": null,
    "destination_number": null,
    "caller_id": null,
    "call_timeout": null,
    // "custom_identifier": null,
    // "async": null,
    "get_call_id": null,
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
    voiceApiHeaders,
    callpatchPayload,
    voiceQueue,
    responses,
    DefaultTTL,
}