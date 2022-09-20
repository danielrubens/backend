const rescue = require('express-rescue');
const { weatherService } = require('../services');

const search = async (req, res) => {
  const { city, units, lang } = req.query;
  const { statusCode, payload } = await weatherService.search({ city, units, lang });
  res.status(statusCode).json(payload);
};

const airPollution = async (req, res) => {
  const { lat, lon } = req.query;
  const { statusCode, payload } = await weatherService.airPollution({ lat, lon });
  res.status(statusCode).json(payload);
};

const call5day = async (req, res) => {
  const { lat, lon, units } = req.query;
  const { statusCode, payload } = await weatherService.call5day({ lat, lon, units });
   res.status(statusCode).json(payload);
};

const iconUrlFromCode = async (req, res) => {
  const { code } = req.query;
  const { statusCode, payload } = await weatherService.iconUrlFromCode({ code });
   res.status(statusCode).json(payload);
};

const locationIq = async (req, res) => {
  const { lat, lng } = req.query;
  const { statusCode, payload } = await weatherService.locationIq({ lat, lng });
   res.status(statusCode).json(payload);
};

module.exports = {
  search: rescue(search),
  airPollution: rescue(airPollution),
  call5day: rescue(call5day),
  iconUrlFromCode: rescue(iconUrlFromCode),
  locationIq: rescue(locationIq),
};
