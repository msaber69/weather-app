const Weather = require('../models/Weather');

const weatherController = {
  getAllWeather: (req, res) => {
    Weather.getAll((err, weatherData) => {
      if (err) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(weatherData);
    });
  }
};

module.exports = weatherController;
