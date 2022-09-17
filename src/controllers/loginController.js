const rescue = require('express-rescue');

const signIn = async (req, res) => { 
  const { email, password } = req.body;
  console.log(email, password);
  // const token = await loginService.signIn(email, password);
  res.status(200).json({ token: '123456789' });
};

const sigUp = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  /// / const token = await loginService.signUp(name, email, password);
  res.status(200).json({ token: '123456789' });
};

module.exports = {
  signIn: rescue(signIn),
  sigUp: rescue(sigUp),
};
