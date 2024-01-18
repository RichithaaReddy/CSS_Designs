import React, { useState, useEffect } from 'react';

const ComplexImageGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1546464677-c25cd52c470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbwFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="complex-image-gallery">
      <div className="slider">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .complex-image-gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }

          .slider {
            width: 600px;
            height: 400px;
            overflow: hidden;
            position: relative;
          }

          .slide {
            width: 100%;
            height: 100%;
            position: absolute;
            opacity: 0;
            transform: scale(0.8);
            transition: opacity 1s, transform 1s;
          }

          .slide.active {
            opacity: 1;
            transform: scale(1);
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default ComplexImageGallery;
