module.exports = class ClientError extends Error {
  badRequest = (message = 'Bad Request') => ({
    statusCode: 404,
    message,
    stack: this.stack,
  });

  unauthorized = (message = 'Unauthorized') => ({
    statusCode: 401,
    message,
    stack: this.stack,
  });

  paymentRequired = (message = 'Payment Required') => ({
    statusCode: 402,
    message,
    stack: this.stack,
  });

  forbidden = (message = 'Forbidden') => ({
    statusCode: 403,
    message,
    stack: this.stack,
  });

  notFound = (message = 'Not Found') => ({
    statusCode: 404,
    message,
    stack: this.stack,
  });

  methodNotAllowed = (message = 'Method Not Allowed') => ({
    statusCode: 405,
    message,
    stack: this.stack,
  });

  notAcceptable = (message = 'Not Acceptable') => ({
    statusCode: 406,
    message,
    stack: this.stack,
  });

  proxyAuthenticationRequired = (message = 'Proxy Authentication Required') => ({
    statusCode: 407,
    message,
    stack: this.stack,
  });

  requestTimeout = (message = 'Request Timeout') => ({
    statusCode: 408,
    message,
    stack: this.stack,
  });

  conflict = (message = 'Conflict') => ({
    statusCode: 409,
    message,
    stack: this.stack,
  });

  gone = (message = 'Gone') => ({
    statusCode: 410,
    message,
    stack: this.stack,
  });

  lengthRequired = (message = 'Length Required') => ({
    statusCode: 411,
    message,
    stack: this.stack,
  });

  preconditionFailed = (message = 'Precondition Failed') => ({
    statusCode: 412,
    message,
    stack: this.stack,
  });

  payloadTooLarge = (message = 'Payload Too Large') => ({
    statusCode: 413,
    message,
    stack: this.stack,
  });

  uriTooLong = (message = 'URI Too Long') => ({
    statusCode: 414,
    message,
    stack: this.stack,
  });

  unsupportedMediaType = (message = 'Unsupported Media Type') => ({
    statusCode: 415,
    message,
    stack: this.stack,
  });

  rangeNotSatisfiable = (message = 'Range Not Satisfiable') => ({
    statusCode: 416,
    message,
    stack: this.stack,
  });

  expectationFailed = (message = 'Expectation Failed') => ({
    statusCode: 417,
    message,
    stack: this.stack,
  });

  imATeapot = (message = 'I\'m a teapot') => ({
    statusCode: 418,
    message,
    stack: this.stack,
  });

  misdirectedRequest = (message = 'Misdirected Request') => ({
    statusCode: 421,
    message,
    stack: this.stack,
  });

  unprocessableEntity = (message = 'Unprocessable Entity') => ({
    statusCode: 422,
    message,
    stack: this.stack,
  });

  locked = (message = 'Locked') => ({
    statusCode: 423,
    message,
    stack: this.stack,
  });

  failedDependency = (message = 'Failed Dependency') => ({
    statusCode: 424,
    message,
    stack: this.stack,
  });

  upgradeRequired = (message = 'Upgrade Required') => ({
    statusCode: 426,
    message,
    stack: this.stack,
  });

  preconditionRequired = (message = 'Precondition Required') => ({
    statusCode: 428,
    message,
    stack: this.stack,
  });

  tooManyRequests = (message = 'Too Many Requests') => ({
    statusCode: 429,
    message,
    stack: this.stack,
  });

  requestHeaderFieldsTooLarge = (message = 'Request Header Fields Too Large') => ({
    statusCode: 431,
    message,
    stack: this.stack,
  });

  unavailableForLegalReasons = (message = 'Unavailable For Legal Reasons') => ({
    statusCode: 451,
    message,
    stack: this.stack,
  });
}