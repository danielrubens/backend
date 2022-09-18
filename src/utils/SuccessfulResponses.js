module.exports = class SuccessfulResponses {
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
    statusCode: this.successfulResponses.ok,
    payload
  })

  created = (payload = null) => ({
    statusCode: this.successfulResponses.created,
    payload
  })

  accepted = (payload = null) => ({
    statusCode: this.successfulResponses.accepted,
    payload
  })

  noContent = (payload = null) => ({
    statusCode: this.successfulResponses.noContent,
    payload
  })

  resetContent = (payload = null) => ({
    statusCode: this.successfulResponses.resetContent,
    payload
  })

  partialContent = (payload = null) => ({
    statusCode: this.successfulResponses.partialContent,
    payload
  })

  multiStatus = (payload = null) => ({
    statusCode: this.successfulResponses.multiStatus,
    payload
  })

  alreadyReported = (payload = null) => ({
    statusCode: this.successfulResponses.alreadyReported,
    payload
  })

  imUsed = (payload = null) => ({
    statusCode: this.successfulResponses.imUsed,
    payload
  })
}