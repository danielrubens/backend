const { loginModel } = require('../Models');
const { userModel } = require('../Models');
const { handlePassword, createId, token } = require('../utils');

userModel.getUserByEmail('marcio.daniel@msn.com').then((user) => console.log(user, 'data'));

const signIn = async ({email, password}) => {
  const user = await userModel.getUserByEmail(email);
  if ( user === null) {
    const err = new Error('User not found');
    err.statusCode = 401;
    throw err;
  }
  const isValid = await handlePassword.comparePassword(password, user.password);
  if (!isValid) {
    const err = new Error('Invalid password');
    err.statusCode = 401;
    throw err;
  }
  return user;

};

const signUp = async ({name, email, password}) => {
  const user = await userModel.getUserByEmail(email);
  if ( user) {
    const err = new Error('User already exists');
    err.statusCode = 409;
    throw err;
  }
  const hash = await handlePassword.createHashPassword(password);
  const id = createId();
  await loginModel.createUser({id, name, email, password: hash});
  return newUser;
};

module.exports = {
  signIn,
  signUp,
};