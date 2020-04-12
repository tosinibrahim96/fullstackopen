import React from 'react';

const ContactInfo = ({ name,number }) => {
  return (
     <li>{`${name}  : ${number}`}</li>
  );
};

export default ContactInfo;
