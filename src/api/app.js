const express = require('express');
const cors = require('cors');

require('dotenv').config();

const errorHandle = require('../middlewares/errorHandle');

const routes = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', routes.loginRoute);

app.all('*', (_req, _res) => {
  const { ErrorClient } = require('../utils');
  const errorClient = new ErrorClient;
  throw errorClient.notFound('Endpoint not found');
});

app.use(errorHandle);

module.exports = app;
