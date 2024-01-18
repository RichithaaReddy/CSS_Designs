import React, { useState, useEffect, useRef } from 'react';

const ComplexAnimationGallery = () => {
  const images = [
    'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80',
    'https://images.unsplash.com/photo-1546464677-c25cd52c470b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGZyZWUlMjBpbWFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://plus.unsplash.com/premium_photo-1684445034763-013f0525c40c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZyZWUlMjBpbwFnZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1626808642875-0aa545482dfb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
  ];

  const [isGalleryVisible, setIsGalleryVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the gallery is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsGalleryVisible(true);
          observer.unobserve(entry.target); // Stop observing once gallery is visible
        }
      });
    }, options);

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isGalleryVisible) {
      // Start the rotation animation when gallery is visible
      const rotationInterval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000); // Rotate every 3 seconds

      return () => {
        clearInterval(rotationInterval);
      };
    }
  }, [isGalleryVisible]);

  return (
    <div ref={galleryRef}>
      <h2>Complex Animation Gallery</h2>
      <div className="complex-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className={`complex-image ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <style jsx>
        {`
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
            transition: transform 1s ease-in-out;
          }

          .complex-image img {
            max-width: 100%;
            max-height: 100%;
            object-fit: cover;
          }

          .complex-image.active {
            animation: rotate 5s linear;
          }

          @keyframes rotate {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default ComplexAnimationGallery;
