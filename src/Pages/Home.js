// Home.js
import React, { useState, useEffect } from 'react';
import NavBar from "../Components/NavigationBar";
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';
import ScrollArrows from "../Components/ScrollArrows";
import './Home.css'; // Import your CSS file
import { alignPropType } from 'react-bootstrap/esm/types';

const images = [image1, image2, image3, image4, image5];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Calculate the opacity based on the scroll position
      const opacity = Math.min(scrollY / (windowHeight / 2), 1);
      setScrollOpacity(opacity);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowParagraph(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <NavBar />

      <h1 >TITLUL MARE PE CENTRU</h1>

      <div className="slideshow-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
            <p>alasdasda</p>
          </div>
        ))}
        
      </div>
                 
      <ScrollArrows />
    </div>
  );
};

export default Home;
