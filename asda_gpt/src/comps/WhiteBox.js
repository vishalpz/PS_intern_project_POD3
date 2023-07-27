import React from 'react';

const WhiteBox = ({ children }) => {
    const whiteBoxStyle = {
      width: '200px', // Set your desired width
      height: '200px', // Set your desired height
      backgroundColor: 'white', // Set the background color to white
      border: '1px solid #ccc', // Add a border for better visibility (optional)
      borderRadius: '5px', // Optional: Add rounded corners
      boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)', // Optional: Add a shadow effect
      // You can add more styles here if needed
    };
  
    return <div style={whiteBoxStyle}>{children}</div>;
  };

export default WhiteBox;