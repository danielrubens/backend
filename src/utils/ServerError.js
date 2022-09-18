module.exports = class ServerError extends Error {
  internalServerError = (message = 'Internal Server Error') => ({
    statusCode: 500,
    message,
    stack: this.stack,
  });

  notImplemented = (message = 'Not Implemented') => ({
    statusCode: 501,
    message,
    stack: this.stack,
  });

  badGateway = (message = 'Bad Gateway') => ({
    statusCode: 502,
    message,
    stack: this.stack,
  });

  serviceUnavailable = (message = 'Service Unavailable') => ({
    statusCode: 503,
    message,
    stack: this.stack,
  });

  gatewayTimeout = (message = 'Gateway Timeout') => ({
    statusCode: 504,
    message,
    stack: this.stack,
  });

  httpVersionNotSupported = (message = 'HTTP Version Not Supported') => ({
    statusCode: 505,
    message,
    stack: this.stack,
  });

  variantAlsoNegotiates = (message = 'Variant Also Negotiates') => ({
    statusCode: 506,
    message,
    stack: this.stack,
  });

  insufficientStorage = (message = 'Insufficient Storage') => ({
    statusCode: 507,
    message,
    stack: this.stack,
  });

  loopDetected = (message = 'Loop Detected') => ({
    statusCode: 508,
    message,
    stack: this.stack,
  });

  notExtended = (message = 'Not Extended') => ({
    statusCode: 510,
    message,
    stack: this.stack,
  });

  networkAuthenticationRequired = (message = 'Network Authentication Required') => ({
    statusCode: 511,
    message,
    stack: this.stack,
  });
}