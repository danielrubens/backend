const express = require('express');
const cors = require('cors');
const { ErrorClient } = require('../utils');

require('dotenv').config();

const errorHandle = require('../middlewares/errorHandle');

const routes = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', routes.loginRoute);
app.use('/weather', routes.weatherRoute);

app.all('*', (_req, _res) => {
  const errorClient = new ErrorClient();
  throw errorClient.notFound('Endpoint not found');
});

app.use(errorHandle);

module.exports = app;
