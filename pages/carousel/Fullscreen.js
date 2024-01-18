import React, { useState } from 'react';

const Fullscreen = () => {
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

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handlePreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleCloseImage = () => {
    setSelectedImageIndex(null);
  };

  return (
    <div>
      <h2>Creative Image Gallery</h2>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div
            key={index}
            className="image-container"
            onClick={() => handleImageClick(index)}
          >
            <img src={image} alt={`Image ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      {selectedImageIndex !== null && (
        <div className="image-modal">
          <span className="close-button" onClick={handleCloseImage}>
            &times;
          </span>
          <div className="modal-content">
            <img src={images[selectedImageIndex]} alt={`Image ${selectedImageIndex + 1}`} className='mx-auto scale-150' />
            <div className="modal-controls">
              <button className="prev-button" onClick={handlePreviousImage}>
                &lt;
              </button>
              <button className="next-button" onClick={handleNextImage}>
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>
        {`
          .image-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
          }

          .image-container {
            overflow: hidden;
            cursor: pointer;
            transition: transform 0.2s ease-in-out;
          }

          .image-container:hover {
            transform: scale(1.05);
          }

          .gallery-image {
            width: 100%;
            height: auto;
          }

          .image-modal {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 1;
          }

          .close-button {
            position: absolute;
            top: 20px;
            right: 20px;
            font-size: 30px;
            cursor: pointer;
            color: white;
          }

          .modal-content {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 100%;
            
          }

          .modal-controls {
            display: flex;
            align-items: center;
          }

          .prev-button,
          .next-button {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 30px;
            color: white;
            margin: 0 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Fullscreen;
