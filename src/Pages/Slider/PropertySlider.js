import React from 'react'
import Slider from "react-slick";

export default function PropertySlider() {
  
  var settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
      <ul className="custom-dots"> {dots} </ul>  // Apply custom class here
    )
  };
  return (
    <div>
      <Slider {...settings1}>
                  <div>
                    <img src={image01} className='img-fluid property_slider_img' alt=''></img>
                  </div>
                  <div>
                    <img src={image01} className='img-fluid property_slider_img' alt=''></img>
                  </div>
                  <div>
                    <img src={image01} className='img-fluid property_slider_img' alt=''></img>
                  </div>
                </Slider>
    </div>
  )
}
