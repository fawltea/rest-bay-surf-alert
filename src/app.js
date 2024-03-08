const axios = require('axios');

require('dotenv').config();

const apiKey = process.env.API_KEY;
const apiUrl = 'https://api.stormglass.io/v2/weather/point';

const getSurfForecast = async (latitude, longitude) => {
  try {
    const response = await axios.get(apiUrl, {
      params: {
        lat: latitude,
        lng: longitude,
        params: 'swellHeight,swellPeriod,swellDirection',
      },
      headers: {
        Authorization: apiKey,
      },
    });

    const forecastData = response.data;
    console.log(forecastData);
  } catch (error) {
    console.error('Error fetching surf forecast:', error.message);
  }
};

const beachLatitude = 51.4877;
const beachLongitude = 3.7282;

getSurfForecast(beachLatitude, beachLongitude);
