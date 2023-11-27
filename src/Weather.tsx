// src/Weather.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface WeatherData {
  _id: {
    $oid: string;
  };
  city: string;
  temperature: number;
  condition: string;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/weather');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      <ul>
        {weatherData.map((weather) => (
          <li key={weather._id.$oid}>
            <strong>{weather.city}:</strong> {weather.temperature}°C, {weather.condition}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
