class successfulResponses {
  constructor() {
    this.successfulResponses = {
      "ok": 200,
      "created": 201,
      "accepted": 202,
      "noContent": 204,
      "resetContent": 205,
      "partialContent": 206,
      "multiStatus": 207,
      "alreadyReported": 208,
      "imUsed": 226,
    }
  }
  ok = (payload = null) => ({
    status: this.successfulResponses.ok,
    payload
  })

  created = (payload = null) => ({
    status: this.successfulResponses.created,
    payload
  })

  accepted = (payload = null) => ({
    status: this.successfulResponses.accepted,
    payload
  })

  noContent = (payload = null) => ({
    status: this.successfulResponses.noContent,
    payload
  })

  resetContent = (payload = null) => ({
    status: this.successfulResponses.resetContent,
    payload
  })

  partialContent = (payload = null) => ({
    status: this.successfulResponses.partialContent,
    payload
  })

  multiStatus = (payload = null) => ({
    status: this.successfulResponses.multiStatus,
    payload
  })

  alreadyReported = (payload = null) => ({
    status: this.successfulResponses.alreadyReported,
    payload
  })

  imUsed = (payload = null) => ({
    status: this.successfulResponses.imUsed,
    payload
  })
}