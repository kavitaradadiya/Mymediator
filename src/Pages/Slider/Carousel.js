import React from 'react'
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    
    infinite: false,
    autoplay:true,
    speed: 500,
    
    slidesToShow: 3.5,
    slidesToScroll: 1
  };
 
  return (
    <div className='container-fluid m-0 customheight'>
      <Slider {...settings}>
      <div>
        <img src="assets/img/slick1.png" className="img-fluid rounded " alt="..." />
      </div>
      <div>
      <img src="assets/img/slick2.png" className="img-fluid" alt="..." />
      </div>
      <div>
      <img src="assets/img/slick3.png" className="img-fluid rounded" alt="..." />
      </div>
      <div>
        <img src="assets/img/slick1.png" className="img-fluid" alt="..." />
      </div>
      <div>
      <img src="assets/img/slick2.png" className="img-fluid" alt="..." />
      </div>
      <div>
      <img src="assets/img/slick3.png" className="img-fluid rounded" alt="..." />
      </div>
     
    </Slider>
    </div>
  )
}
