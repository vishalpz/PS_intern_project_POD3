import React from 'react';

const WhiteBox = ({ children }) => {
    const whiteBoxStyle = {
      width: '75%', // Set your desired width
      height: '75%', // Set your desired height
      backgroundColor: 'white', // Set the background color to white
      border: '5px solid rgb(120, 190, 32)', // Add a border for better visibility (optional)
      borderRadius: '5px', // Optional: Add rounded corners
      boxShadow: '0 0 30px rgba(120, 190, 32, 0.7)', // Optional: Add a shadow effect
      // You can add more styles here if needed
    };
  
    return <div style={whiteBoxStyle}>{children}</div>;
  };

export default WhiteBox;