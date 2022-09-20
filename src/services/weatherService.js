const axios = require('axios');
const { SuccessfulResponses } = require('../utils');
require('dotenv').config();

const success = new SuccessfulResponses();

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

const { WEATHER_KEY } = process.env;
const { LOCATION_IQ_KEY } = process.env;

const search = async ({ city, units = 'metric', lang = 'pt_br' }) => {
    console.log(city, units, lang, WEATHER_KEY);
  const { data } = await instance.get(
    `weather?q=${city}&units=${units}&lang=${lang}&appid=${WEATHER_KEY}`,
  );
  return success.ok(data);
};

const airPollution = async ({ lat, lon }) => {
  const { data } = await instance.get(
    `air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_KEY}`,
  );
  return success.ok(data);
};

const call5day = async ({ lat, lon, units = 'metric' }) => {
  const { data } = await instance.get(
    `forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${WEATHER_KEY}`,
  );
  return success.ok(data);
};

const iconUrlFromCode = async ({ code }) => `http://openweathermap.org/img/wn/${code}@2x.png`;

const locationIq = async ({ lat, lng }) => {
  const { data } = await instance.get(
    // eslint-disable-next-line max-len
    `https://us1.locationiq.com/v1/reverse.php?key=${LOCATION_IQ_KEY}&lat=${lat}&lon=${lng}&format=json`,
  );
  return success.ok(data);
};

module.exports = {
  search,
  airPollution,
  call5day,
  iconUrlFromCode,
  locationIq,
};
