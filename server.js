const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/weather_app';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const weatherSchema = new mongoose.Schema({
  city: String,
  temperature: Number,
  condition: String,
});
const Weather = mongoose.model('weather_app', weatherSchema, 'weather_app');

app.get('/api/weather', async (req, res) => {
  try {
    const weatherData = await Weather.find();
    res.json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
