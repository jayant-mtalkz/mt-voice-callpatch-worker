const queuePayload = require('../PayloadQueue')

describe("VOICE-CALLPATCH-API-TATAELE", () => {
  test("Voice-callpatch-payload", () => {
    const from=parseInt(queuePayload.data.from)
    const to=parseInt(queuePayload.data.to)
    expect(queuePayload.requestid).not.toEqual(undefined)
    expect(queuePayload.apikey).not.toBe(undefined)
    expect(from).toBeGreaterThanOrEqual(6000000000)
    expect(to).toBeGreaterThanOrEqual(6000000000)
    expect(queuePayload.data.campaign).toEqual("279648")
    expect(queuePayload.data.caller_id).toEqual("918069859000")
    expect(queuePayload.data.call_timeout).toBe(120)
    expect(queuePayload.data.get_call_id).toBe(1)
    expect(queuePayload.data.integration.provider).toBe("voice-callpatch-tatatele")
    expect(queuePayload.data.integration.params.token).not.toBe(undefined)
    expect(queuePayload.data.channel).toEqual("voice")
  })
})
