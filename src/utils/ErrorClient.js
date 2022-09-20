module.exports = class ErrorClient extends Error {
  badRequest(message = 'Bad Request') {
    return {
      statusCode: 400,
      message,
      stack: this.stack,
    };
  }

  unauthorized(message = 'Unauthorized') {
    return {
      statusCode: 401,
      message,
      stack: this.stack,
    };
  }

  paymentRequired(message = 'Payment Required') {
    return {
      statusCode: 402,
      message,
      stack: this.stack,
    };
  }

  forbidden(message = 'Forbidden') {
    return {
      statusCode: 403,
      message,
      stack: this.stack,
    };
  }

  notFound(message = 'Not Found') {
    return {
      statusCode: 404,
      message,
      stack: this.stack,
    };
  }

  methodNotAllowed(message = 'Method Not Allowed') {
    return {
      statusCode: 405,
      message,
      stack: this.stack,
    };
  }

  notAcceptable(message = 'Not Acceptable') {
    return {
      statusCode: 406,
      message,
      stack: this.stack,
    };
  }

  proxyAuthenticationRequired(message = 'Proxy Authentication Required') {
    return {
      statusCode: 407,
      message,
      stack: this.stack,
    };
  }

  requestTimeout(message = 'Request Timeout') {
    return {
      statusCode: 408,
      message,
      stack: this.stack,
    };
  }

  conflict(message = 'Conflict') {
    return {
      statusCode: 409,
      message,
      stack: this.stack,
    };
  }

  gone(message = 'Gone') {
    return {
      statusCode: 410,
      message,
      stack: this.stack,
    };
  }

  lengthRequired(message = 'Length Required') {
    return {
      statusCode: 411,
      message,
      stack: this.stack,
    };
  }

  preconditionFailed(message = 'Precondition Failed') {
    return {
      statusCode: 412,
      message,
      stack: this.stack,
    };
  }

  payloadTooLarge(message = 'Payload Too Large') {
    return {
      statusCode: 413,
      message,
      stack: this.stack,
    };
  }

  uriTooLong(message = 'URI Too Long') {
    return {
      statusCode: 414,
      message,
      stack: this.stack,
    };
  }

  unsupportedMediaType(message = 'Unsupported Media Type') {
    return {
      statusCode: 415,
      message,
      stack: this.stack,
    };
  }

  rangeNotSatisfiable(message = 'Range Not Satisfiable') {
    return {
      statusCode: 416,
      message,
      stack: this.stack,
    };
  }

  expectationFailed(message = 'Expectation Failed') {
    return {
      statusCode: 417,
      message,
      stack: this.stack,
    };
  }

  imATeapot(message = 'I\'m a teapot') {
    return {
      statusCode: 418,
      message,
      stack: this.stack,
    };
  }

  misdirectedRequest(message = 'Misdirected Request') {
    return {
      statusCode: 421,
      message,
      stack: this.stack,
    };
  }

  unprocessableEntity(message = 'Unprocessable Entity') {
    return {
      statusCode: 422,
      message,
      stack: this.stack,
    };
  }

  locked(message = 'Locked') {
    return {
      statusCode: 423,
      message,
      stack: this.stack,
    };
  }

  failedDependency(message = 'Failed Dependency') {
    return {
      statusCode: 424,
      message,
      stack: this.stack,
    };
  }

  upgradeRequired(message = 'Upgrade Required') {
    return {
      statusCode: 426,
      message,
      stack: this.stack,
    };
  }

  preconditionRequired(message = 'Precondition Required') {
    return {
      statusCode: 428,
      message,
      stack: this.stack,
    };
  }

  tooManyRequests(message = 'Too Many Requests') {
    return {
      statusCode: 429,
      message,
      stack: this.stack,
    };
  }

  requestHeaderFieldsTooLarge(message = 'Request Header Fields Too Large') {
    return {
      statusCode: 431,
      message,
      stack: this.stack,
    };
  }

  unavailableForLegalReasons(message = 'Unavailable For Legal Reasons') {
    return {
      statusCode: 451,
      message,
      stack: this.stack,
    };
  }
};