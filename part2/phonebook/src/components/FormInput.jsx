import React from 'react';

const FormInput = ({ value, handleChange, type, label, required }) => {
  return (
    <div>
      {label}
      <input
        value={value}
        onChange={handleChange}
        type={type}
        required={required}
      />
    </div>
  );
};

export default FormInput;
