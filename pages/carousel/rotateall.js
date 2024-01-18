import React, { useState, useEffect } from 'react';

const ComplexAnimationGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1546464677-c25cd52c470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // Disable animation before changing image
      setTimeout(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setAnimate(true); // Re-enable animation after changing image
      }, 1000); // Wait for 1 second before changing image
    }, 5000); // Change image every 5 seconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>Complex Animation Gallery</h2>
      <div className="complex-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`complex-image ${index === currentIndex ? 'active' : ''}`}
            style={{
              animation: animate
                ? `rotate 5s linear infinite, scale 0.5s ease-in-out ${
                    index === currentIndex ? 'forwards' : 'backwards'
                  }`
                : 'none',
            }}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <style jsx>
        {`
          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }

          .complex-gallery {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100vh;
          }

          .complex-image {
            width: 500px;
            height: 500px;
            margin: 0 20px;
            cursor: pointer;
          }

          .complex-image img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
          }

          .complex-image.active {
            animation: pulse 2s ease-in-out infinite;
          }

          @keyframes pulse {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComplexAnimationGallery;
