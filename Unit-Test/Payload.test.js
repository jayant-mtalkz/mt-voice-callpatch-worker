describe("VOICE-CALLPATCH-API-TATAELE", () => {
  describe("Voice-Callpatch Positive Cases", () => {
    //Positive Test Cases
    test("Voice-callpatch-payload", () => {
      let queuePayloadPositiveCases = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
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
      const from = parseInt(queuePayloadPositiveCases.data.from)
      const to = parseInt(queuePayloadPositiveCases.data.to)
      expect(queuePayloadPositiveCases.requestid).not.toEqual(undefined)
      expect(queuePayloadPositiveCases.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(queuePayloadPositiveCases.data.campaign).toEqual("279648")
      expect(queuePayloadPositiveCases.data.caller_id).toEqual("918069859000")
      expect(queuePayloadPositiveCases.data.call_timeout).toBe(120)
      expect(queuePayloadPositiveCases.data.get_call_id).toBe(1)
      expect(queuePayloadPositiveCases.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(queuePayloadPositiveCases.data.integration.params.token).not.toBe(undefined)
      expect(queuePayloadPositiveCases.data.channel).toEqual("voice")
    })
  })

  describe("Voice-Callpatch Negative test cases", () => {
    //Negative Test Cases
    test("RequestId is not defined with payload", () => {
      const RequestId_not_defined = {
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
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
      const from = parseInt(RequestId_not_defined.data.from)
      const to = parseInt(RequestId_not_defined.data.to)
      expect(RequestId_not_defined.requestid).toBe(undefined)
      expect(RequestId_not_defined.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(RequestId_not_defined.data.campaign).toEqual("279648")
      expect(RequestId_not_defined.data.caller_id).toEqual("918069859000")
      expect(RequestId_not_defined.data.call_timeout).toBe(120)
      expect(RequestId_not_defined.data.get_call_id).toBe(1)
      expect(RequestId_not_defined.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(RequestId_not_defined.data.integration.params.token).not.toBe(undefined)
      expect(RequestId_not_defined.data.channel).toEqual("voice")
    })
    test("APIKey is not defined with payload", () => {
      const API_Key_not_defined = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
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
        }
      }
      const from = parseInt(API_Key_not_defined.data.from)
      const to = parseInt(API_Key_not_defined.data.to)
      expect(API_Key_not_defined.requestid).not.toEqual(undefined)
      expect(API_Key_not_defined.apikey).toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(API_Key_not_defined.data.campaign).toEqual("279648")
      expect(API_Key_not_defined.data.call_timeout).toBe(120)
      expect(API_Key_not_defined.data.get_call_id).toBe(1)
      expect(API_Key_not_defined.data.caller_id).toEqual("918069859000")
      expect(API_Key_not_defined.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(API_Key_not_defined.data.integration.params.token).not.toBe(undefined)
      expect(API_Key_not_defined.data.channel).toEqual("voice")
    })
    test("From Number is not 10 digit number", () => {
      const from_number = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "to": "6395938635",
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
      const from = parseInt(from_number.data.from)
      const to = parseInt(from_number.data.to)
      expect(from_number.requestid).not.toEqual(undefined)
      expect(from_number.apikey).not.toBe(undefined)
      expect(from).not.toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(from_number.data.campaign).toEqual("279648")
      expect(from_number.data.caller_id).toEqual("918069859000")
      expect(from_number.data.call_timeout).toBe(120)
      expect(from_number.data.get_call_id).toBe(1)
      expect(from_number.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(from_number.data.integration.params.token).not.toBe(undefined)
      expect(from_number.data.channel).toEqual("voice")
    })
    test("To Number is not 10 digit number", () => {
      const to_number = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
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
      const from = parseInt(to_number.data.from)
      const to = parseInt(to_number.data.to)
      expect(to_number.requestid).not.toEqual(undefined)
      expect(to_number.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).not.toBeGreaterThanOrEqual(6000000000)
      expect(to_number.data.campaign).toEqual("279648")
      expect(to_number.data.caller_id).toEqual("918069859000")
      expect(to_number.data.call_timeout).toBe(120)
      expect(to_number.data.get_call_id).toBe(1)
      expect(to_number.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(to_number.data.integration.params.token).not.toBe(undefined)
      expect(to_number.data.channel).toEqual("voice")
    })
    test("Campaign ID is not given", () => {
      const campaign_id_not_given = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
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
      const from = parseInt(campaign_id_not_given.data.from)
      const to = parseInt(campaign_id_not_given.data.to)
      expect(campaign_id_not_given.requestid).not.toEqual(undefined)
      expect(campaign_id_not_given.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(campaign_id_not_given.data.campaign).toEqual(undefined)
      expect(campaign_id_not_given.data.caller_id).toEqual("918069859000")
      expect(campaign_id_not_given.data.call_timeout).toBe(120)
      expect(campaign_id_not_given.data.get_call_id).toBe(1)
      expect(campaign_id_not_given.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(campaign_id_not_given.data.integration.params.token).not.toBe(undefined)
      expect(campaign_id_not_given.data.channel).toEqual("voice")
    })
    test("Caller_ID is not equal to predefined number", () => {
      const caller_id_not_defined = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
          "campaign": "279648",
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
      const from = parseInt(caller_id_not_defined.data.from)
      const to = parseInt(caller_id_not_defined.data.to)
      expect(caller_id_not_defined.requestid).not.toEqual(undefined)
      expect(caller_id_not_defined.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(caller_id_not_defined.data.campaign).toEqual("279648")
      expect(caller_id_not_defined.data.caller_id).not.toEqual("918069859000")
      expect(caller_id_not_defined.data.call_timeout).toBe(120)
      expect(caller_id_not_defined.data.get_call_id).toBe(1)
      expect(caller_id_not_defined.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(caller_id_not_defined.data.integration.params.token).not.toBe(undefined)
      expect(caller_id_not_defined.data.channel).toEqual("voice")
    })
    test("Call Time out is not given", () => {
      const call_timeout_not_given = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
          "campaign": "279648",
          "caller_id": "918069859000",
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
      const from = parseInt(call_timeout_not_given.data.from)
      const to = parseInt(call_timeout_not_given.data.to)
      expect(call_timeout_not_given.requestid).not.toEqual(undefined)
      expect(call_timeout_not_given.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(call_timeout_not_given.data.campaign).toEqual("279648")
      expect(call_timeout_not_given.data.caller_id).toEqual("918069859000")
      expect(call_timeout_not_given.data.call_timeout).not.toBe(120)
      expect(call_timeout_not_given.data.get_call_id).toBe(1)
      expect(call_timeout_not_given.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(call_timeout_not_given.data.integration.params.token).not.toBe(undefined)
      expect(call_timeout_not_given.data.channel).toEqual("voice")
    })
    test("CALL_ID is not given", () => {
      const call_id_no_given = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
          "campaign": "279648",
          "caller_id": "918069859000",
          "call_timeout": 120,
          "integration": {
            "provider": "voice-callpatch-tatatele",
            "params": {
              "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNTAwNiwiaXNzIjoiaHR0cHM6XC9cL2Nsb3VkcGhvbmUudGF0YXRlbGVzZXJ2aWNlcy5jb21cL3Rva2VuXC9nZW5lcmF0ZSIsImlhdCI6MTY3NTE0OTg3MSwiZXhwIjoxOTc1MTQ5ODcxLCJuYmYiOjE2NzUxNDk4NzEsImp0aSI6IlREbm1MT0tZZlJkWGdtZmwifQ.NWeV7vlXeObBl1IDdUt-omCySLcPjT32__4vj9_BcbQ",
            },
          },
          "channel": "voice",
        },
      }
      const from = parseInt(call_id_no_given.data.from)
      const to = parseInt(call_id_no_given.data.to)
      expect(call_id_no_given.requestid).not.toEqual(undefined)
      expect(call_id_no_given.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(call_id_no_given.data.campaign).toEqual("279648")
      expect(call_id_no_given.data.caller_id).toEqual("918069859000")
      expect(call_id_no_given.data.call_timeout).toBe(120)
      expect(call_id_no_given.data.get_call_id).not.toBe(1)
      expect(call_id_no_given.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(call_id_no_given.data.integration.params.token).not.toBe(undefined)
      expect(call_id_no_given.data.channel).toEqual("voice")
    })
    test("Integration provider is not equal to voice-callpatch-tatatele", () => {
      const Integration_provider_not_given = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
          "campaign": "279648",
          "caller_id": "918069859000",
          "call_timeout": 120,
          "get_call_id": 1,
          "integration": {
            "params": {
              "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNTAwNiwiaXNzIjoiaHR0cHM6XC9cL2Nsb3VkcGhvbmUudGF0YXRlbGVzZXJ2aWNlcy5jb21cL3Rva2VuXC9nZW5lcmF0ZSIsImlhdCI6MTY3NTE0OTg3MSwiZXhwIjoxOTc1MTQ5ODcxLCJuYmYiOjE2NzUxNDk4NzEsImp0aSI6IlREbm1MT0tZZlJkWGdtZmwifQ.NWeV7vlXeObBl1IDdUt-omCySLcPjT32__4vj9_BcbQ",
            },
          },
          "channel": "voice",
        },
      }
      const from = parseInt(Integration_provider_not_given.data.from)
      const to = parseInt(Integration_provider_not_given.data.to)
      expect(Integration_provider_not_given.requestid).not.toEqual(undefined)
      expect(Integration_provider_not_given.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(Integration_provider_not_given.data.campaign).toEqual("279648")
      expect(Integration_provider_not_given.data.caller_id).toEqual("918069859000")
      expect(Integration_provider_not_given.data.call_timeout).toBe(120)
      expect(Integration_provider_not_given.data.get_call_id).toBe(1)
      expect(Integration_provider_not_given.data.integration.provider).not.toBe("voice-callpatch-tatatele")
      expect(Integration_provider_not_given.data.integration.params.token).not.toBe(undefined)
      expect(Integration_provider_not_given.data.channel).toEqual("voice")
    })
    test("Token is not defined", () => {
      const token = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
          "campaign": "279648",
          "caller_id": "918069859000",
          "call_timeout": 120,
          "get_call_id": 1,
          "integration": {
            "provider": "voice-callpatch-tatatele",
            "params": {
              "token": "eyJ0eXAiOiJKV1QJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNTAwNiwiaXNzIjoiaHR0cHM6XC9cL2Nsb3VkcGhvbmUudGF0YXRlbGVzZXJ2aWNlcy5jb21cL3Rva2VuXC9nZW5lcmF0ZSIsImlhdCI6MTY3NTE0OTg3MSwiZXhwIjoxOTc1MTQ5ODcxLCJuYmYiOjE2NzUxNDk4NzEsImp0aSI6IlREbm1MT0tZZlJkWGdtZmwifQ.NWeV7vlXeObBl1IDdUt-omCySLcPjT32__4vj9_BcbQ",
            },
          },
          "channel": "voice",
        },
      }
      const from = parseInt(token.data.from)
      const to = parseInt(token.data.to)
      expect(token.requestid).not.toEqual(undefined)
      expect(token.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(token.data.campaign).toEqual("279648")
      expect(token.data.caller_id).toEqual("918069859000")
      expect(token.data.call_timeout).toBe(120)
      expect(token.data.get_call_id).toBe(1)
      expect(token.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(token.data.integration.params.token).not.toEqual("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjMxNTAwNiwiaXNzIjoiaHR0cHM6XC9cL2Nsb3VkcGhvbmUudGF0YXRlbGVzZXJ2aWNlcy5jb21cL3Rva2VuXC9nZW5lcmF0ZSIsImlhdCI6MTY3NTE0OTg3MSwiZXhwIjoxOTc1MTQ5ODcxLCJuYmYiOjE2NzUxNDk4NzEsImp0aSI6IlREbm1MT0tZZlJkWGdtZmwifQ.NWeV7vlXeObBl1IDdUt-omCySLcPjT32__4vj9_BcbQ")
      expect(token.data.channel).toEqual("voice")
    })
    test("Channel is not defined as Voice Channel", () => {
      const channel = {
        "requestid": "kBJCkhdQOd1Zr4s",
        "apikey": "jxqA2OvBovo6VLRb",
        "data": {
          "from": "6395938635",
          "to": "6395938635",
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
        },
      }
      const from = parseInt(channel.data.from)
      const to = parseInt(channel.data.to)
      expect(channel.requestid).not.toEqual(undefined)
      expect(channel.apikey).not.toBe(undefined)
      expect(from).toBeGreaterThanOrEqual(6000000000)
      expect(to).toBeGreaterThanOrEqual(6000000000)
      expect(channel.data.campaign).toEqual("279648")
      expect(channel.data.caller_id).toEqual("918069859000")
      expect(channel.data.call_timeout).toBe(120)
      expect(channel.data.get_call_id).toBe(1)
      expect(channel.data.integration.provider).toBe("voice-callpatch-tatatele")
      expect(channel.data.integration.params.token).not.toBe(undefined)
      expect(channel.data.channel).not.toEqual("voice")
    })
  })

})
