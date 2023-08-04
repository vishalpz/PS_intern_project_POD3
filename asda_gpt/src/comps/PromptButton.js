import React, { useState } from 'react';

const PromptButton = ({ prompts }) => {
  const [selectedPrompt, setSelectedPrompt] = useState('');

  const handleButtonClick = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    setSelectedPrompt(prompts[randomIndex]);
  };

  const buttonStyle = {
    fontSize: '1.3em',
    borderRadius: '0.5em',
    boxShadow: '0 0 20px rgba(120, 190, 32, 0.4)',
    padding: '0.5em',
    borderStyle: 'none',
    color: 'white',
    backgroundColor: 'rgb(120, 190, 33)',
    fontFamily: 'Arial, Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: 'bold',
    cursor: 'pointer',
    width: '50%',
    margin: '0.5em',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={handleButtonClick}>
        {selectedPrompt || 'Chat with the bot'} {/* Display prompt if available, else default */}
      </button>
    </div>
  );
};

export default PromptButton;