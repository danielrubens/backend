const { Router } = require('express');
const weatherController = require('../controllers/weatherController');

const weatherRouter = Router();

weatherRouter.get('/search', weatherController.search);
weatherRouter.get('/air-pollution', weatherController.airPollution);
weatherRouter.get('/call5day', weatherController.call5day);
weatherRouter.get('/icon-url-from-code', weatherController.iconUrlFromCode);
weatherRouter.get('/location-iq', weatherController.locationIq);

module.exports = weatherRouter;