const Joi = require('joi');
const { token, ErrorClient } = require('../utils');

const validFieldsSignup = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).required().messages({
  'any.required': '{#label} is required',
  'string.empty': '{#label} field is not allowed to be empty',
  'string.min': '{#label} must be at least {#limit} characters long',
  'string.max': '{#label} must be at most {#limit} characters long',
  'string.email': '{#label} must be a valid email',
});

const validFieldsSignin = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
}).required().messages({
  'any.required': '{#label} is required',
  'string.empty': '{#label} field is not allowed to be empty',
  'string.min': '{#label} must be at least {#limit} characters long',
  'string.max': '{#label} must be at most {#limit} characters long',
  'string.email': '{#label} must be a valid email',
});

const validSignup = (req, res, next) => {
  const { name, email, password } = req.body;
  const { error } = validFieldsSignup.validate({ name, email, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const validSignin = (req, res, next) => {
  const { email, password } = req.body;
  const { error } = validFieldsSignin.validate({ email, password });
  if (error) {
    return res.status(400).json({ message: error.message });
  }
  next();
};

const validToken = (req, _res, next) => {
  const { authorization } = req.headers;

  const errorClient = new ErrorClient();

  if (authorization === undefined) {
    throw errorClient('Token not found', 401);
  }
  const check = token.authenticate(authorization);
  if (check.validated === false) {
    throw errorClient.unauthorized('Expired or invalid token');
  }
  req.user = { id: check.payload.id, name: check.payload.name };

  next();
};

module.exports = {
  validSignup,
  validSignin,
  validToken,
};