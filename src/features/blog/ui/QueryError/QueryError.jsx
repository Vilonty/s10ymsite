import React from 'react';

export const Error = ({ message }) => {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px', 
      color: 'red',
      fontSize: '18px',
    }}>
      Ошибка: {message}
    </div>
  );
};