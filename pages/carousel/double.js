import React, { useState } from 'react';

const Double = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://picsum.photos/id/1028/300/400',
    'https://picsum.photos/id/15/300/250',
    'https://picsum.photos/id/1040/300/350',
    'https://picsum.photos/id/106/300/300',
    'https://picsum.photos/id/136/300/320',
    'https://picsum.photos/id/1039/300/280',
    'https://picsum.photos/id/110/300/380',
    'https://picsum.photos/id/1047/300/320',
    'https://picsum.photos/id/1057/300/270',
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <h2>Image Gallery with Animations and Transitions</h2>
      <div className="image-gallery">
        <div className="carousel">
          <img
            src={images[currentIndex]}
            alt={`Image ${currentIndex + 1}`}
            className="current-image"
          />
          <div className="prev-button" onClick={prevImage}>
            &lt;
          </div>
          <div className="next-button" onClick={nextImage}>
            &gt;
          </div>
        </div>
        <div className="thumbnails">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index + 1}`}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <style jsx>
        {`
          .image-gallery {
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .carousel {
            position: relative;
            max-width: 100%;
            overflow: hidden;
            margin: 20px 0;
          }

          .current-image {
            width: 100%;
            height: auto;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .prev-button,
          .next-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            font-size: 24px;
            cursor: pointer;
            background: rgba(0, 0, 0, 0.5);
            color: white;
            padding: 10px;
          }

          .prev-button {
            left: 10px;
          }

          .next-button {
            right: 10px;
          }

          .thumbnails {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
          }

          .thumbnail {
            max-width: 10%;
            height: auto;
            padding: 5px;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.9s ease-in-out;
          }

          .thumbnail.active {
            transform: scale(1.3);
          }
        `}
      </style>
    </div>
  );
};

export default Double;
