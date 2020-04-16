import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchInput from './components/SearchInput';
import SingleCountryDetails from './components/SingleCountryDetails';
import MultipleCountryDetails from './components/MultipleCountryDetails';
import './App.css';

function App() {
  const [searchValue, setSearchValue] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data);
    });
  }, []);

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const searchResult = countries.filter((country) => {
    const lowerCaseSpacelessText = searchValue.toLowerCase().replace(/ /g, '');

    if (!searchValue || !lowerCaseSpacelessText) {
      return null;
    }

    return country.name
      .toLowerCase()
      .replace(/ /g, '')
      .includes(lowerCaseSpacelessText);
  });

  return (
    <div className='App'>
      <SearchInput
        label={'Search Country by Name'}
        handleInputChange={handleSearchInput}
        type={'text'}
      />
      <div>
        {searchResult.length > 10 ? (
          'Too many countries. Please make your search more specific'
        ) : searchResult.length === 1 ? (
          <SingleCountryDetails country={searchResult[0]} />
        ) : (
          <MultipleCountryDetails countries={searchResult} searchInputValue={searchValue}/>
        )}
      </div>
    </div>
  );
}

export default App;
// http://api.weatherstack.com/current?access_key=680b936b492ba871b96920e5a1255eca&query=New%20York