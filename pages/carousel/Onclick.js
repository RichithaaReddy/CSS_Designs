import React, { useState } from 'react';

const Gallery = () => {
  const Onclick = [
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

  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleThumbnailClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div>
      <h2>Innovative Image Gallery</h2>
      <div className="image-gallery">
        <div className="main-image-container">
          <img src={selectedImage} alt="Selected Image" className="main-image" />
        </div>
        <div className="thumbnails">
          {images.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => handleThumbnailClick(imageSrc)}
              className={`thumbnail ${imageSrc === selectedImage ? 'selected' : ''}`}
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

          .main-image-container {
            width: 300px;
            height: 400px;
            overflow: hidden;
            margin-bottom: 20px;
          }

          .main-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .thumbnails {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
          }

          .thumbnail {
            width: 60px;
            height: 80px;
            cursor: pointer;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .thumbnail.selected {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
};

export default Onclick;
