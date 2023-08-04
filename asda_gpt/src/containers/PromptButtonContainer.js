import React from 'react';
import PromptButton from '../comps/PromptButton';

const PromptButtonContainer = () => {
  // Array of arrays of prompts for each button
  const promptSets = [
    [
      'Hello! Welcome to ASDA. How can I help you find what you are looking for?',
      'Looking for something specific today? Let me assist you!',
      'Tell me, what is on your shopping list?',
    ],
    [
      'Do you need help with groceries, electronics, or something else?',
      'Feel free to ask me about our current promotions!',
      'What type of items are you interested in?',
    ],
    [
      'Planning a shopping spree? Let us make it a great one!',
      'Have you checked out our latest arrivals?',
      'What categories are you interested in exploring today?',
    ],
  ];
  
    // Add more sets of prompts as needed


  return (
    <div>
      {promptSets.map((prompts, index) => (
        <PromptButton key={index} prompts={prompts} />
      ))}
    </div>
  );
};

export default PromptButtonContainer;
