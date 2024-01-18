import React, { useState, useEffect } from 'react';

const CreativeGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1546464677-c25cd52c470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Creative 3D Flip Image Gallery</h2>
      <div className="flip-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flip-card ${index === currentIndex ? 'active' : ''}`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={image} alt={`Image ${index + 1}`} />
              </div>
              <div className="flip-card-back">
                <h3>Image {index + 1}</h3>
                <p>Description goes here.</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .flip-gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
          }

          .flip-card {
            width: 300px;
            height: 400px;
            perspective: 1000px;
            margin: 0 20px;
          }

          .flip-card-inner {
            width: 100%;
            height: 100%;
            transition: transform 0.5s;
            transform-style: preserve-3d;
          }

          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }

          .flip-card-front,
          .flip-card-back {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            backface-visibility: hidden;
          }

          .flip-card-front {
            background-color: #f0f0f0;
          }

          .flip-card-back {
            background-color: #333;
            color: white;
            transform: rotateY(180deg);
          }

          .flip-card img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
          }
        `}
      </style>
    </div>
  );
};

export default CreativeGallery;
