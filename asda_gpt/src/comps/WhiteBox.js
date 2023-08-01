import React from 'react';

const WhiteBox = ({ children }) => {
    const whiteBoxStyle = {
      minHeight: '39em', // Set your desired height
      backgroundColor: 'white', // Set the background color to white
      border: '3px solid rgb(120, 190, 32)', // Add a border for better visibility (optional)
      borderRadius: '5px', // Optional: Add rounded corners
      boxShadow: '0 0 30px rgba(120, 190, 32, 0.7)', // Optional: Add a shadow effect
      position: 'absolute',
      top: '0', bottom: '0', left: '0', right: '0',
      margin: '3% 12.5%',
    };
  
    return <div style={whiteBoxStyle}>{children}</div>;
  };

export default WhiteBox;