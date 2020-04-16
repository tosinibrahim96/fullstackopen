import React from 'react';

const SearchInput = ({ label, handleInputChange, type }) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleInputChange} type={type} />
    </div>
  );
};

export default SearchInput;
