const express = require('express');
const cors = require('cors');

const { errorHandler } = require('../middlewares/errorHandle');

const routes = require('../routes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', routes.loginRoute);

app.all('*', (_req, res) => {
  res.status(404).send('Not Found');
});

app.use(errorHandler);

module.exports = app;
