import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link if you're using it

const CloseIcon = () => {
  const [hovered, setHovered] = useState(false);

  const CloseIconStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: '10px',
    left: '20px',
    backgroundColor: 'transparent',
    border: 'none',
    color: hovered ? '#FE414D' : '#A9A9A9',
    cursor: 'pointer',
    padding: '0',
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link to="/">
      <p
        style={CloseIconStyle}
        className="close-icon"
        alt="close icon"
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        X
      </p>
    </Link>
  );
};

export default CloseIcon;
