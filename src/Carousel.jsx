// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const carouselImages = [
  'food.jpg',
  'image2.jpg',
  'image3.jpg',  // Add paths to your images here
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ width: '100%',height:'400px', overflow: 'hidden' }}>
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: '100%', height: 'auto' }} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
