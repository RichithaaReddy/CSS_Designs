import React from 'react';

const Change = () => {
  const images = [
    {
      id: 1,
      src: 'https://picsum.photos/id/1028/300/400',
      alt: 'Image 1',
      hoverSrc: 'https://picsum.photos/id/200/300/400',
    },
    {
      id: 2,
      src: 'https://picsum.photos/id/15/300/250',
      alt: 'Image 2',
      hoverSrc: 'https://picsum.photos/id/201/300/250',
    },
    {
      id: 3,
      src: 'https://picsum.photos/id/1040/300/350',
      alt: 'Image 3',
      hoverSrc: 'https://picsum.photos/id/202/300/350',
    },
  ];

  return (
    <div>
      <h2>Innovative Image Gallery</h2>
      <div className="image-gallery">
        {images.map((image) => (
          <div key={image.id} className="image-container">
            <img src={image.src} alt={image.alt} />
            <img className="hover-image" src={image.hoverSrc} alt={image.alt} />
          </div>
        ))}
      </div>

      <style jsx>
        {`
          .image-gallery {
            display: flex;
            flex-direction: row;
            gap: 40px;
            align-items: center;
          }

          .image-container {
            position: relative;
            width: 300px;
            height: 400px;
            overflow: hidden;
            margin-bottom: 20px;
          }

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease-in-out;
          }

          .hover-image {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;
            transition: opacity 0.3s ease-in-out;
          }

          .image-container:hover img {
            transform: scale(1.05);
          }

          .image-container:hover .hover-image {
            opacity: 1;
          }
        `}
      </style>
    </div>
  );
};

export default Change;
