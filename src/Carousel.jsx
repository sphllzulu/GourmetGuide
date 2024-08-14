// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const carouselImages = [
  'food.jpg',
  'caesar.jpg',
  'ramen.jpg',  
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
    <Box sx={{ width: '100%',height:'400px', overflow: 'hidden' }}  >
      <Slider {...settings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} style={{ width: '100%', height: 'auto', borderRadius:'5px' }} />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
