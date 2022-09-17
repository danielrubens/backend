const { Router } = require('express');
const { loginController } = require('../controllers');

const loginRoute = Router();

loginRoute.post('/', loginController.signIn);
loginRoute.put('/', loginController.sigUp);

module.exports = loginRoute;