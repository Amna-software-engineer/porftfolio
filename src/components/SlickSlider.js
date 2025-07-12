import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SlickSlider = ({slidesToShow,slidesToScroll,children,responsiveSetting}) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        // centerMode:true,
        responsive:responsiveSetting
        
      };
  return (
    <Slider {...settings} className='w-[80%] md:w-full mx-auto'>
  {children}
  </Slider>
  )
}

export default SlickSlider;