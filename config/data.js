// callPatch url
const voiceUrls = {
    MTALKZ_VOICE_CALLPATCH_API: "https://api-smartflo.tatateleservices.com/v1/click_to_call",
}

const voiceQueue = {
    voiceCallPatchTatatele: "voice-callpatch-tatatele",
    eventsVoiceCallPatchTatatele: "events-voice-callpatch-tatatele",
}

const DefaultTTL = 7 * 24 * 60 * 60

module.exports = {
    voiceUrls,
    voiceQueue,
    DefaultTTL,
}