import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

const basic = () => {
  const images = [
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg',
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg',
    'https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="overflow-hidden w-full">
        <div className="flex transition-transform duration-500 ease-in-out transform">
          <div key={currentIndex} className="w-full">
            <img src={images[currentIndex]} alt={`Image ${currentIndex}`} className="w-full" />
          </div>
        </div>
      </div>
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2" onClick={handlePrevClick}>
        <ChevronLeft size={32} />
      </button>
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2" onClick={handleNextClick}>
        <ChevronRight size={32} />
      </button>
    </div>
  );
};

export default basic;
