const axios = require('axios');
const express = require('express');

const app = express();
const port = 80;

const apiKey = '';
const apiUrl = 'https://api.stormglass.io/v2/weather/point';

const beachLatitude = 51.4877;
const beachLongitude = 3.7282;

const getSurfForecast = async (latitude, longitude) => {
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

  return response.data;
};

app.get('/forecast', async (req, res) => {
  //const latitude = req.query.lat || 51.4877;
  //const longitude = req.query.lng || 3.7282;
  
  try 
  {
    res.json(await getSurfForecast(beachLatitude, beachLongitude));
  } catch (error)
  {
    console.error('Error fetching surf forecast:', error.message);
    res.status(500).send('Error fetching surf forecast');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://0.0.0.0:${port}`);
});


process.on('SIGINT', () => {
  console.log('Received SIGINT. Shutting down gracefully.');
  server.close(() => {
    console.log('HTTP server closed.');
  });
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit(1);
  }, 0);
});