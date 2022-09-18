const rescue = require('express-rescue');
const { loginService } = require('../services');

const signIn = async (req, res) => { 
  const { email, password } = req.body;
  const token = await loginService.signIn({email, password});
  res.status(200).json({ token });
};

const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const {statusCode, payload} = await loginService.signup({name, email, password});
  res.status(statusCode).json({ payload });
};

module.exports = {
  signIn: rescue(signIn),
  signup: rescue(signup),
};
