import React from 'react';

const ContactInfo = ({ name, number, handleDelete, id }) => {
  return (
    <li>
      {`${name}  : ${number}`}{' '}
      <button onClick={() => handleDelete(id)}>Delete</button>
    </li>
  );
};

export default ContactInfo;
