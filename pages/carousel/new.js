import React, { useState } from 'react';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGluZWFwcGxlfGVufDB8fDB8fHww&w=1000&q=80',
    'https://img.freepik.com/free-vector/sticker-design-with-banana-isolated_1308-77292.jpg?w=2000',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/800px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
    'https://static.toiimg.com/photo/94179218.cms',
  ];

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <h2>Innovative Image Gallery with 3D Card Flip</h2>
      <div className="image-gallery">
        <div className="carousel">
          {images.map((imageUrl, index) => (
            <div
              key={index}
              className={`card ${index === currentIndex ? 'active' : ''}`}
              onClick={index === currentIndex ? nextImage : () => setCurrentIndex(index)}
            >
              <div className="card-inner">
                <img src={imageUrl} alt={`Image ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>
      {`
          .image-gallery {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }

          .carousel {
            display: flex;
            justify-content: space-between;
            width: 700px;
          }

          .card {
            width: 150px;
            height: 200px;
            cursor: pointer;
            transition: transform 0.5s;
          }

          .card-inner {
            width: 100%;
            height: 100%;
            perspective: 1000px;
            transform-style: preserve-3d;
            transition: transform 0.5s;
          }

          .card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            backface-visibility: hidden;
          }

          .card:hover {
            transform: rotateY(180deg);
          }

          .card.active {
            cursor: default;
          }

          .hidden {
            display: none;
          }

          .flipped {
            transform: rotateY(360deg);
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;
