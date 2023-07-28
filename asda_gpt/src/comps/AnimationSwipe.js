import React, { useEffect } from 'react';
import background from "../images/ASDA_background.png";
import "../styles/Swipe.css";



  const AnimationSwipe = () => {
    useEffect(() => {
        // Add the "uncover" class to the image on component mount to trigger the animation
        const image = document.querySelector('.image');
        image.classList.add('uncover');
      }, []);


    return (
      <div className="image-container">
        <img
          src={background}
          className="image"
          alt=""
        />
      </div>
    );
  };


export default AnimationSwipe;