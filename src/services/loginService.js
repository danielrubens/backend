const { loginModel } = require('../Models');
const { userModel } = require('../Models');
const {
   handlePassword, 
   createId, 
   token,
   ErrorClient,
   ServerError,
   SuccessfulResponses,
   } = require('../utils');


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

const signup = async ({name, email, password}) => {
  const user = await userModel.getUserByEmail(email);
  const err = new ErrorClient;
  const success = new SuccessfulResponses;

  if (user !== null) {
    throw err.conflict('User already registered');
  }
  const hash = await handlePassword.createHashPassword(password);

  const id = createId();

  await loginModel.signup({id, name, email, password: hash});

  return success.created({
    id,
    token: token.generate({id, name}),
  });
};

module.exports = {
  signIn,
  signup,
};