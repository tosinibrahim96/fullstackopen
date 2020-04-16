import React, { useState } from 'react';
import SingleCountryDetails from './SingleCountryDetails';

const MultipleCountryDetails = ({ countries,searchInputValue }) => {
  const [countryToDisplay, setCountryToDisplay] = useState('');

  const handleShowDetails = (country, event) => {
    setCountryToDisplay(country);
  };

  return (
    <div>
      {countries.map((country) => (
        <p key={country.name}>
          {country.name}
          <button onClick={(event) => handleShowDetails(country, event)}>
            Show details
          </button>
        </p>
      ))}
      {countryToDisplay && searchInputValue? (
        <SingleCountryDetails country={countryToDisplay} />
      ) : (
        ''
      )}
    </div>
  );
};

export default MultipleCountryDetails;
