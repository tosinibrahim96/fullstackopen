import React from 'react';

const Notification = ({ notificationInfo }) => {
  const notificationStyles = {
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (!Object.keys(notificationInfo).length) {
    return null;
  }

  return (
    <div style={{ ...notificationStyles, color: notificationInfo.color }}>
      {notificationInfo.message}
    </div>
  );
};
export default Notification;
