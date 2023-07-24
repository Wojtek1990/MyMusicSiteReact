// Gallery.js
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import image1 from '../../images/my1.JPG';
import image2 from '../../images/kot.JPG';
import image3 from '../../images/youngs.jpg';

const images = [
  {
    original: image1,
    thumbnail: image1,
    originalAlt: 'Zdjęcie 1',
    thumbnailAlt: 'Zdjęcie 1',
  },
  {
    original: image2,
    thumbnail: image2,
    originalAlt: 'Zdjęcie 2',
    thumbnailAlt: 'Zdjęcie 2',
  },
  {
    original: image3,
    thumbnail: image3,
    originalAlt: 'Zdjęcie 3',
    thumbnailAlt: 'Zdjęcie 3',
  },
  {
    original: image3,
    thumbnail: image3,
    originalAlt: 'Zdjęcie 3',
    thumbnailAlt: 'Zdjęcie 3',
  },
  {
    original: image3,
    thumbnail: image3,
    originalAlt: 'Zdjęcie 3',
    thumbnailAlt: 'Zdjęcie 3',
  },{
    original: image3,
    thumbnail: image3,
    originalAlt: 'Zdjęcie 3',
    thumbnailAlt: 'Zdjęcie 3',
  },
  // Dodaj więcej zdjęć w razie potrzeby
];

const Gallery = () => {
  return <ImageGallery items={images} />;
};

export default Gallery;
