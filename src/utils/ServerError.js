module.exports = class ServerError extends Error {
  internalServerError(message = 'Internal Server Error') {
    return { statusCode: 500,
    message,
    stack: this.stack,
    };
  }

  notImplemented(message = 'Not Implemented') {
    return { statusCode: 501,
    message,
    stack: this.stack,
    };
  }

  badGateway(message = 'Bad Gateway') {
    return { statusCode: 502,
    message,
    stack: this.stack,
    };
  }

  serviceUnavailable(message = 'Service Unavailable') {
    return { statusCode: 503,
    message,
    stack: this.stack,
    };
  }

  gatewayTimeout(message = 'Gateway Timeout') {
    return { statusCode: 504,
    message,
    stack: this.stack,
    };
  }

  httpVersionNotSupported(message = 'HTTP Version Not Supported') {
    return { statusCode: 505,
    message,
    stack: this.stack,
    };
  }

  variantAlsoNegotiates(message = 'Variant Also Negotiates') {
    return { statusCode: 506,
    message,
    stack: this.stack,
    };
  }

  insufficientStorage(message = 'Insufficient Storage') {
    return { statusCode: 507,
    message,
    stack: this.stack,
    };
  }

  loopDetected(message = 'Loop Detected') {
    return {
      statusCode: 508,
      message,
      stack: this.stack,
    };
  }

  notExtended(message = 'Not Extended') {
    return { statusCode: 510,
    message,
    stack: this.stack,
    };
  }

  networkAuthenticationRequired(message = 'Network Authentication Required') {
    return { statusCode: 511,
    message,
    stack: this.stack,
    };
  }
};