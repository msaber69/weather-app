const express = require('express');
const cors = require('cors');
const weatherController = require('./controllers/weatherController');

const app = express();
const PORT = 5001;

app.use(cors());

// Define API endpoint to fetch weather data
app.get('/api/weather', weatherController.getAllWeather);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
