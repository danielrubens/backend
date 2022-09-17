const { Router } = require('express');
const { loginController } = require('../controllers');
const { validSignin, validSignup } = require('../middlewares/validation');

const loginRoute = Router();

loginRoute.post('/', validSignin, loginController.signIn);
loginRoute.put('/', validSignup, loginController.sigUp);

module.exports = loginRoute;