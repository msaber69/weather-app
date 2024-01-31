import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import './Weather.css';

interface WeatherData {
  country: string;
  city: string;
  temperature: number;
  weather_condition: string;
}

const Weather: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response: AxiosResponse<WeatherData[]> = await axios.get('/api/weather');
        setWeatherData(response.data);
      } catch (error) {
        setError('Error fetching weather data');
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="weather-container">
      <h1 className="weather-header">Weather Data</h1>
      {error && <p>{error}</p>}
      <ul className="weather-list">
        {weatherData.map((data, index) => (
          <li className="weather-item" key={index}>
            <h2>{data.country}, {data.city}</h2>
            <p>Temperature: <span className="temperature">{data.temperature}</span></p>
            <p>Condition: <span className="condition">{data.weather_condition}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Weather;
