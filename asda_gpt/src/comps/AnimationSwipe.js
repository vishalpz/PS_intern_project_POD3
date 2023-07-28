import React, { useEffect } from 'react';
import Logo from "../images/asda.png";
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
          src={Logo}
          className="image"
          alt=""
        />
      </div>
    );
  };


export default AnimationSwipe;