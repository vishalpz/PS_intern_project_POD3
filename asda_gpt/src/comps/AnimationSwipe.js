import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Logo from '../images/asda.png';
import '../styles/Swipe.css';

const AnimationSwipe = () => {
  const navigate = useNavigate(); // Use the useNavigate hook

  useEffect(() => {
    // trigger the animation
    const image = document.querySelector('.image');
    image.classList.add('uncover');

    // Define the duration of the animation in milliseconds
    const animationDuration = 2500; 

    // Delay navigation to the next page after the animation duration
    const nextPage = '/LoginOrGuest'; 

    const timeoutId = setTimeout(() => {
      navigate(nextPage); 
    }, animationDuration);

    // Cleanup the timeout when the component is unmounted
    return () => clearTimeout(timeoutId);
  }, [navigate]);

  return (
    <div className="image-container">
      <img src={Logo} className="image" alt="" />
    </div>
  );
};

export default AnimationSwipe;
