// Catalog.js
import React, { useEffect, useRef } from 'react';
import NavBar from "../Components/NavigationBar";
import ScrollArrows from "../Components/ScrollArrows";
import './Catalog.css';

import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import image4 from './Images/image4.jpg';
import image5 from './Images/image5.jpg';

function Catalog() {
  const images = [
    { url: './Images/image1.jpg', text: 'Image 1' },
    { url: './Images/image2.jpg', text: 'Image 2' },
    { url: './Images/image3.jpg', text: 'Image 3' },
    { url: './Images/image4.jpg', text: 'Image 4' },
    { url: './Images/image5.jpg', text: 'Image 5' },
    { url: './Images/image1.jpg', text: 'Image 6' },
    { url: './Images/image2.jpg', text: 'Image 7' },
    { url: './Images/image3.jpg', text: 'Image 8' },
    { url: './Images/image4.jpg', text: 'Image 9' },
    { url: './Images/image5.jpg', text: 'Image 10' },
  ];

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleSearch = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const searchTerm = searchInputRef.current.value.toLowerCase();
        if (searchTerm.trim() === '') return;

        const foundElement = Array.from(document.querySelectorAll('.catalog-item p'))
          .find((element) => element.textContent.toLowerCase().includes(searchTerm));

        if (foundElement) {
          foundElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const searchInput = searchInputRef.current;
    searchInput.addEventListener('keydown', handleSearch);

    return () => {
      searchInput.removeEventListener('keydown', handleSearch);
    };
  }, []);

  return (
    <div className="App">
      <NavBar />
      <ScrollArrows />
      <form className="search-form">
        <input
          type="search"
          placeholder="Search"
          ref={searchInputRef}
          aria-label="Search"
          className="search-input"
        />
      </form>
      <div className="catalog-container">
        {images.map((image, index) => (
          <div className="catalog-item" key={index}>
            <img src={image.url} alt={image.text} className="catalog-image" />
            <p>{image.text}</p>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Catalog;
