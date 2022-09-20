const { loginModel } = require('../models');
const { userModel } = require('../models');

const {
  handlePassword,
  createId,
  token,
  ErrorClient,
  SuccessfulResponses,
} = require('../utils');

const errorClient = new ErrorClient();
const success = new SuccessfulResponses();

const signIn = async ({ email, password }) => {
  const user = await userModel.getUserByEmail(email);
  if (user === null) {
    throw errorClient.unauthorized('Email or password incorrect');
  }
  const check = await handlePassword.comparePassword({ password, hash: user.password });

  if (check.validated === false) {
    throw errorClient.unauthorized('Email or password incorrect');
  }

  const { id, name } = user;

  return success.ok({
    id,
    token: token.generate({ id, name }),
  });
};

const signup = async ({ name, email, password }) => {
  const user = await userModel.getUserByEmail(email);

  if (user !== null) {
    throw errorClient.conflict('User already registered');
  }
  const hash = await handlePassword.createHashPassword(password);

  const id = createId();

  const result = await loginModel.signup({ id, name, email, password: hash });
  if (result === null) {
    throw errorClient.internal('Error creating user');
  }

  return success.created({
    id,
    token: token.generate({ id, name }),
  });
};

module.exports = {
  signIn,
  signup,
};