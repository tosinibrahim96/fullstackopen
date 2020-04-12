import React from 'react';

const SearchInput = ({ value, handleChange, type, label }) => {
  return (
    <div>
      {label}
      <input
        value={value}
        onChange={handleChange}
        type={type}
      />
    </div>
  );
};

export default SearchInput;
