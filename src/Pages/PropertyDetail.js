import React, { useEffect, useState } from 'react'
import CommonSection from '../Components/CommonSection'
import { Link, useParams } from 'react-router-dom'
import products from '../Components/Fakedata/product'
import ProductCard from './Category/ProductCard'
import './assets/css/PropertyDetail.css'
import './assets/css/Header.css'
import './assets/css/Footer.css'
import './assets/css/Home.css'
import './assets/css/Property.css'
import mdi_speaking from '../img/mdi_speaking.png'
import frame185 from '../img/call.png'
import icon1 from '../img/icon1.png'
import icon2 from '../img/icon2.png'
import icon3 from '../img/icon3.png'
import icon4 from '../img/icon4.png'
import icon5 from '../img/icon5.png'
import icon6 from '../img/icon6.png'
import star from '../img/Vector1.png'
import Ellipse from '../img/Ellipse158.png'
import iphone15 from '../img/iPhone15.png'
import logo3 from '../img/logo3.png'
import logo4 from '../img/logo4.png'
import vector from '../img/Vector.png'
import StarRatings from 'react-star-ratings';
import group4 from "../img/group4.png"
import Slider from "react-slick";



export default function PropertyDetail() {

  // ------------slider---------
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


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // -----------------------model---------------------------------
  const [rating, setRating] = useState(0);
  const [showCommentModal, setShowCommentModal] = useState(false);
  const [comment, setComment] = useState('');



  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleSubmitRating = (event) => {
    event.preventDefault();
    setShowCommentModal(true); // Show the comment modal on rating submit

    const feedbackModal = document.getElementById('hitesh');
    const feedbackModalInstance = window.bootstrap.Modal.getInstance(feedbackModal);
    if (feedbackModalInstance) {
      feedbackModalInstance.hide();
    }
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Handle comment submission here
    console.log('Rating:', rating);
    console.log('Comment:', comment);

    // Clear the form
    setRating(0);
    setComment('');
    setShowCommentModal(false); // Hide comment modal after submission
  };

  const handleOpenSubmitModal = (e) => {
    e.preventDefault()
    const enquiryModal = document.getElementById('enquiryModal');
    const modalInstance = window.bootstrap.Modal.getInstance(enquiryModal);
    modalInstance.hide();

    enquiryModal.addEventListener('hidden.bs.modal', function () {
      const submitModal = new window.bootstrap.Modal(document.getElementById('hitesh'));
      submitModal.show();
    });
  };

  // ---------------------------------productdetail------------------------
  const { id } = useParams()
  console.log(id);


  const Product = products.find(item => item.id === id)
  console.log(Product)

  const { title, price, category, location, image01,} = Product;

  const [preImage, setPreImage] = useState(image01);

  const [allProduct, setAllProduct] = useState(products);

  useEffect(() => {

    if (category === "Property") {
      const FilterProduct = products.filter(item => item.category === "Property")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct)
    }
    if (category === "Car") {
      const FilterProduct = products.filter(item => item.category === "Car")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct)
    }
    if (category === "Bike") {
      const FilterProduct = products.filter(item => item.category === "Bike")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct)
    }
    if (category === "Electronic") {
      const FilterProduct = products.filter(item => item.category === "Electronic")
      // console.log(FilterProduct);
      setAllProduct(FilterProduct)
    }

  }, [category])


  return (

    <div style={{ backgroundColor: "#F6F6F6" }}>
      <div> <CommonSection title="Property Detail"></CommonSection></div>

      <section className='container mt-3 mb-3'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-4 col-4'>
                <div onClick={() => setPreImage(image01)}>
                  <img src={image01} alt='' className='img-fluid mt-2' width="90%"></img>
                </div>
                <div onClick={() => setPreImage(image01)}>
                  <img src={image01} alt='' className='img-fluid mt-2' width="90%"></img>
                </div>
                <div onClick={() => setPreImage(image01)}>
                  <img src={image01} alt='' className='img-fluid mt-2' width="90%"></img>
                </div>
              </div>
              <div className='col-lg-8 col-md-8 col-sm-8 col-8 mt-1'>
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
              <div className='Property_detail mt-4'>
                <h2>{title}  <img src={group4} alt='' width="35%" className='ms-2'></img></h2>
                <h3 className='mt-3'>{category}2021 <span className='ps-4'><img src={star} alt='' className='img-fluid pe-2' width="30px"></img>4.5</span></h3>
                <h4 className='mt-3'><i className="ri-map-pin-2-fill product_icon pe-1"></i>{location}</h4>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 col-12 mt-3'>
            <div className=''>
              <div className='Property_box4 mx-auto d-block'>
                <div className=' row Property_box2 mt-2 me-2 ms-2'>
                  <div className='col-lg-4 col-md-4 col-sm-4'>
                    <img src={Ellipse} alt='' className='img-fluid profile_img_set' width="80%"></img>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-6 '>
                    <div className='property_profile mt-2 mx-auto d-block'>
                      <h5>Jayalakshmi</h5>
                      <p>Owner</p>
                    </div>
                  </div>
                  <div className='col-lg-2 col-md-2 col-sm-2 Profile_link_mt'>
                    <Link className='property_link'>SeeProfile</Link>
                  </div>
                </div>
                <div style={{ width: '100%', height: '2px', backgroundColor: '#E1E1E1', margin: '20px 0' }} />
                <div className='row'>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <div className="d-flex align-items-center ms-4 mt-2">
                      <img src={icon5} alt="Icon" className="icon-style"></img>
                      <div className="text-content">
                        <p className="mb-0 icon_p">T.nagar</p>
                        <p className="mb-0 fw-bold">Chennai</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-6 col-sm-12'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225774882685!2d72.84343101893258!3d21.245595574425934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690017805909!5m2!1sen!2sin" width="70%" height="45%" title='map' className='map_border mx-auto d-block'></iframe>
                  </div>
                </div>
              </div>
              <div className='text-center mt-5'>
                <h3 className='propertydetail_price'>₹ {price}</h3>

                <button className='propertydetail_btn me-2' data-bs-toggle="modal" data-bs-target="#enquiryModal">
                  <img src={mdi_speaking} alt='' className='img-fluid pe-2' width="25%" />
                  Enquiry
                </button>

                {/* --------------Enquiry-model---------------- */}

                <div className="modal fade" id="enquiryModal" tabIndex="-1" aria-labelledby="enquiryModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered modal-lg model_size">
                    <div className="modal-content">
                      <div className="modal-header mx-auto d-block">
                        <h5 className="modal-title pt-4" id="enquiryModalLabel">Enquiry Now</h5>
                      </div>
                      <div className="modal-body p-0">
                        <div className="container text-left">
                          <div className="row justify-content-center">
                            <div className="col-lg-12">
                              <form>
                                <div className="row mb-3">
                                  <div className="col-md-6">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name" />
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="email" className="form-label label_title">E-mail ID</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter E-mail ID" />
                                  </div>
                                </div>
                                <div className="row mb-3">
                                  <div className="col-md-6">
                                    <label htmlFor="mobile" className="form-label">Mobile number</label>
                                    <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile number" />
                                  </div>
                                  <div className="col-md-6">
                                    <label htmlFor="whatsapp" className="form-label">WhatsApp number</label>
                                    <input type="text" className="form-control" id="whatsapp" placeholder="Enter WhatsApp number" />
                                  </div>
                                </div>
                                <div className="mb-3">
                                  <label htmlFor="message" className="form-label">Message</label>
                                  <textarea className="form-control" id="message" rows="3" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="d-grid gap-2 col-6 mx-auto">
                                  <button type="button" className="btn btn-primary" onClick={handleOpenSubmitModal}>Submit</button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ---------------feedback-model------------------- */}

                <div className="modal fade" id="hitesh" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div className="modal-dialog model_size1">
                    <div className="modal-content model_bg">
                      <div className="modal-body">
                        <h5 className="modal-title mx-auto d-block model-title1 mb-2" id="staticBackdropLabel">Share your Feedback</h5>
                        <form onSubmit={handleSubmitRating}>
                          <div className="rating">
                            <StarRatings
                              rating={rating}
                              starRatedColor="gold"
                              changeRating={handleRatingChange}
                              numberOfStars={5}
                              starDimension="35px"
                              name="rating" className="rating_star" />
                          </div>
                          <div className=" mx-auto d-block">
                            <button type="submit" className="feedback_btn mt-4">Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ------------comment-model----------------- */}

                <div className={`modal fade ${showCommentModal ? 'show' : ''}`} id="commentModal" tabIndex="-1" aria-labelledby="commentModalLabel" aria-hidden={!showCommentModal} style={{ display: showCommentModal ? 'block' : 'none' }}>
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content model_bg1">
                      <div className="modal-header">
                        <h5 className="modal-title mx-auto d-block model-title1 " id="commentModalLabel">Report Ads</h5>
                      </div>
                      <div className="modal-body">
                        <h5 className='model-title2'>Enter Your Feedback </h5>
                        <form onSubmit={handleCommentSubmit}>
                          <div className="form-group">
                            <textarea
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              placeholder="Enter Your Feedback"
                              rows="4"
                              className="form-control"
                            />
                          </div>
                          <div className="text-center mt-4">
                            <button type="submit" className="comment_btn" data-bs-dismiss="modal" aria-label="Close" >Submit</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <button className='propertydetail_btn'><img src={frame185} alt='' className='img-fluid pe-1' width="18%"></img>Call</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ width: '100%', height: '2px', backgroundColor: '#E1E1E1', margin: '20px 0' }} />
      <section className='container mb-3'>
        <div className='row'>
          <div className='col-lg-7 col-md-7 col-sm-7 '>

            <div className='container propertydetail_box '>
              <div className='row pt-4'>
                <div className='col-lg-4 col-md-4 col-sm-4 text-center'>
                  <p><img src={icon1} alt='' className='img-fluid pe-2' width="20%"></img>990 Sq . Ft</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 text-center'>
                  <p><img src={icon2} alt='' className='img-fluid pe-2' width="20%"></img>North Facing</p>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 text-center'>
                  <p><img src={icon3} alt='' className='img-fluid pe-2' width="20%"></img>3 BHK</p>
                </div>
              </div>

              <div style={{ width: '100%', height: '2px', backgroundColor: '#E1E1E1', margin: '20px 0' }} />

              <div className='row pt-3'>
                <div className='col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center align-items-center '>
                  <div className="d-flex align-items-center text-center icon_mt">
                    <img src={icon4} alt="Icon" className="icon-style"></img>
                    <div className="text-content">
                      <p className="mb-0 icon_p">Owner</p>
                      <p className="mb-0">1st</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center align-items-center  icon_mt'>
                  <div className="d-flex align-items-center text-center">
                    <img src={icon5} alt="Icon" className="icon-style"></img>
                    <div className="text-content">
                      <p className="mb-0 icon_p">T.nagar</p>
                      <p className="mb-0">Chennai</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-4 col-sm-4 d-flex justify-content-center align-items-center  icon_mt'>
                  <div className="d-flex align-items-center">
                    <img src={icon6} alt="Icon" className="icon-style"></img>
                    <div className="text-content">
                      <p className="mb-0 icon_p">Posting Date</p>
                      <p className="mb-0">05-Jun-24</p>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ width: '100%', height: '2px', backgroundColor: '#E1E1E1', margin: '20px 0' }} />
              <div className='des'>
                <h3>Description</h3>
                <p>A property description is the written part of the real estate listing that describes the details and noteworthy features of the home. As potential buyers read real estate listings, a well-written description will help pique their interest. A property description is the written part of the real estate listing that describes the details and noteworthy features of the home. As potential buyers read real estate listings, a well-written description will help pique their interest.</p>
              </div>
            </div>
          </div>

          <div className='col-lg-5 col-md-5 col-sm-5 propertydetail_box_set'>
            <div className=' row Property_box2 mt-2 me-2 ms-2'>
              <div className='col-lg-4 col-md-4 col-sm-4'>
                <img src={Ellipse} alt='' className='img-fluid profile_img_set' width="60%"></img>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6'>
                <div className='property_profile mt-2'>
                  <h5>Jayalakshmi</h5>
                  <p>Owner</p>
                </div>
              </div>
              <div className='col-lg-2 col-md-2 col-sm-2 Profile_link_mt'>
                <Link className='property_link'>SeeProfile</Link>
              </div>
            </div>

            <div style={{ width: '100%', height: '2px', backgroundColor: '#E1E1E1', margin: '20px 0' }} />
            <div className='mt-5'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29749.225774882685!2d72.84343101893258!3d21.245595574425934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4fb5c0b087%3A0xb7aabd8a90da0679!2sMota%20Varachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1690017805909!5m2!1sen!2sin" title='map' className='mx-auto d-block map_border1'></iframe>
            </div>
            <div className='mt-4 mb-4'>
              <div className='d-flex justify-content-center align-items-center'>
                <div className="d-flex align-items-center text-center">
                  <img src={icon5} alt="Icon" className="icon-style"></img>
                  <div className="text-content">
                    <p className="mb-0 icon_p">T.nagar</p>
                    <p className="mb-0">Chennai</p>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '100%', height: '2px', backgroundColor: '#E1E1E1', margin: '20px 0' }} />

            <div className='justify-content-between d-flex mt-3'>
              <p className='id_detail'>ADS ID :<span>148562548</span> </p>
              <p className='ad_detail'>REPORT AD</p>
            </div>
          </div>
        </div>
      </section>

      <section className='container mb-3'>
        <div className='row propertydetail_box1 py-3'>
          <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6 dec_type'>
                <p>Type</p>
                <p>Bedrooms</p>
                <p>Construction Status</p>
                <p>Listed by</p>
                <p>Carpet Area ( FT2 )</p>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6 dec_det'>
                <p>: Individual House</p>
                <p>: 2</p>
                <p>: Individual House</p>
                <p>: Builder</p>
                <p>: 900</p>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-4 col-sm-6 col-12'>
            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6 dec_type'>
                <p>Facing</p>
                <p>Bathrooms</p>
                <p>Maintainers Monthly Fees </p>
                <p>Bachelors Allowed</p>
                <p>Super Buildup Area   ( FT2 )</p>
              </div>
              <div className='col-lg-6 col-md-6 col-sm-6 col-6 dec_det'>
                <p>: North facing</p>
                <p>: 2</p>
                <p>: Rs : 1,500</p>
                <p>: Yes</p>
                <p>: 600</p>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-4 col-sm-6 col-12'>
            <div className='row'>
              <div className='col-lg-7 col-md-6 col-sm-6 col-6 dec_type'>
                <p>Total Floors</p>
                <p>Car Parking</p>
                <p>Age of building</p>
                <p>Floor No</p>
              </div>
              <div className='col-lg-5 col-md-6 col-sm-6 col-6 dec_det'>
                <p>: 03</p>
                <p>: Yes</p>
                <p>: Build on 2022</p>
                <p>: 02</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container mt-5'>
        <h2 className='Propertydetail_rec mb-4'>Recommended Property</h2>
        <Slider {...settings}>
          {allProduct.map((item) => (
            <div key={item.id} className='p-2'>
              <ProductCard items={item} />
            </div>
          ))}
        </Slider>
      </section>


      <section className='container home_box mt-5'>
        <div className='row'>
          <div className='col-lg-7 col-md-7 col-sm-12'>
            <div className='home_text'>
              <h4 className='home_h'>Download My mediator Mobile App</h4>
              <p className='home_p'><img src={vector} alt='' className='img-fluid me-2' width="12px"></img>Get to know about newly posted property as soon they are posted</p>
              <p className='home_p'><img src={vector} alt='' className='img-fluid me-2' width="12px"></img>Manage your property and purchase & sale your property</p>
              <div className=''>
                <img src={logo3} alt='' className='img-fluid' width="25%"></img>
                <img src={logo4} alt='' className='img-fluid' width="22%"></img>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-12'>
            <img src={iphone15} alt='' className='img-fluid home_img' width="90%"></img>
          </div>
        </div>
      </section>

      <hr />

    </div>
  )
}

