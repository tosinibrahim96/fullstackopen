import React from 'react';
import WeatherDetails from './WeatherDetails';
import '../App.css';

const SingleCountryDetails = ({ country }) => {
  return (
    <div className='country-container'>
      <div className='country-item'>
        <h1>{country.name}</h1>

        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <p>
          Languages:{' '}
          {country.languages
            ? country.languages.map((language, index) => (
                <li key={index}>{language.name}</li>
              ))
            : null}
        </p>
        <img className='flag' src={country.flag} alt='Country flag' />
      </div>
      <WeatherDetails city={country.capital} />
    </div>
  );
};

export default SingleCountryDetails;
