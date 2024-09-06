import React from 'react'
import Slider from "react-slick";

export default function Carousel() {
  var settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3.5, // Default for large screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Max width for medium devices (like tablets)
        settings: {
          slidesToShow: 3,  // Show 3 slides on medium devices
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Max width for devices between tablet and mobile
        settings: {
          slidesToShow: 2,  // Show 2 slides on devices with 768px width
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425, // Max width for small mobile devices
        settings: {
          slidesToShow: 1,  // Show 1 slide on small devices
          slidesToScroll: 1
        }
      }
    ]
  };
 
  return (
    <div className='container-fluid m-0 customheight pt-4'>
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
