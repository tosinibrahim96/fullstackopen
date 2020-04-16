import React, { useEffect, useState } from 'react';
import axios from 'axios';

const WeatherDetails = ({ city }) => {
  const [weatherDetails, setWeatherDetails] = useState('');

  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${city}`
      )
      .then((response) => {
        if (response.data.error) {
          setWeatherDetails(
            'Unable to fetch current weather details. Please try later'
          );
        } else {
          setWeatherDetails(response.data);
        }
      });
  }, []);

  return weatherDetails.current ? (
    <div className='country-item'>
      <h2>Weather in {city}</h2>
      <p>Temprature:{weatherDetails.current.temperature} Celcius</p>
      <img src={weatherDetails.current.weather_icons[0]} alt='weather' />
      <p>
        Wind:{weatherDetails.current.wind_speed} MPH. Direction:{' '}
        {weatherDetails.current.wind_dir}
      </p>
    </div>
  ) : (
    <p>{weatherDetails}</p>
  );
};

export default WeatherDetails;
