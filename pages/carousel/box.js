import React, { useState, useEffect } from 'react';

const Box = () => {
  const images = [
    'https://picsum.photos/id/1028/300/400',
    'https://picsum.photos/id/15/300/250',
    'https://picsum.photos/id/1040/300/350',
    'https://picsum.photos/id/106/300/300',
    'https://picsum.photos/id/136/300/320',
    'https://picsum.photos/id/1039/300/280',
  ];

  const [cubeRotation, setCubeRotation] = useState(0);
  const [hoveredFace, setHoveredFace] = useState(null);

  useEffect(() => {
    const rotationInterval = setInterval(() => {
      setCubeRotation((prevRotation) => prevRotation + 90);
    }, 3000); // Rotate every 3 seconds

    return () => {
      clearInterval(rotationInterval);
    };
  }, []);

  const handleFaceHover = (index) => {
    setHoveredFace(index);
  };

  return (
    <div>
      <h2>3D Cube Image Gallery</h2>
      <div className="cube-gallery">
        <div
          className="cube"
          style={{ transform: `rotateY(${cubeRotation}deg)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`face face-${index + 1} ${
                hoveredFace === index ? 'hovered' : ''
              }`}
              style={{ transform: `rotateY(${index * 90}deg) translateZ(150px)` }}
              onMouseEnter={() => handleFaceHover(index)}
              onMouseLeave={() => handleFaceHover(null)}
            >
              <img src={image} alt={`Image ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .cube-gallery {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .cube {
            perspective: 1000px;
            transform-style: preserve-3d;
            width: 300px;
            height: 300px;
            position: relative;
            transform: rotateY(0deg);
            transition: transform 1s ease-in-out;
          }

          .face {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: white;
            font-weight: bold;
            background: rgba(0, 0, 0, 0.5);
            border: 2px solid #fff;
            transition: transform 0.5s ease-in-out;
          }

          .hovered {
            transform: scale(1.1);
          }

          img {
            max-width: 100%;
            max-height: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Box;
