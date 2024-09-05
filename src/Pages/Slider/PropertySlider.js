import React, { useState } from 'react'
import Slider from "react-slick";


const PropertySlider = ({ image01, image02, image03, title, category, location, star, group4 }) => {
    const [preImage, setPreImage] = useState(image01);
    
  
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };
  
    return (
      <div className='row'>
        {/* Left Side Slider */}
        <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
          <Slider {...sliderSettings}>
            <div onClick={() => setPreImage(image01)}>
              <img src={image01} alt='' className='img-fluid mt-2' width="90%" />
            </div>
            <div onClick={() => setPreImage(image02)}>
              <img src={image02} alt='' className='img-fluid mt-2' width="90%" />
            </div>
            <div onClick={() => setPreImage(image03)}>
              <img src={image03} alt='' className='img-fluid mt-2' width="90%" />
            </div>
          </Slider>
        </div>
  
        {/* Right Side Main Image */}
        <div className='col-lg-8 col-md-8 col-sm-8 col-8 mt-1'>
          <img src={preImage} alt='' className='img-fluid Property_img' />
        </div>
  
        {/* Property Details */}
        <div className='Property_detail mt-4'>
          <h2>{title}  
            <img src={group4} alt='' width="35%" className='ms-2' />
          </h2>
          <h3 className='mt-3'>{category} 2021 
            <span className='ps-4'>
              <img src={star} alt='' className='img-fluid pe-2' width="30px" />4.5
            </span>
          </h3>
          <h4 className='mt-3'>
            <i className="ri-map-pin-2-fill product_icon pe-1"></i>{location}
          </h4>
        </div>
      </div>
    );
  }
  
  export default PropertySlider;