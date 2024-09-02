import React, { useEffect, useState } from 'react'
import Carousel from './Slider/Carousel'
import products from '../Components/Fakedata/product'
import ProductCard from './Category/ProductCard'
import CommonSection from '../Components/CommonSection';

export default function Property() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [category] = useState("PROPERTY")
    const [allProduct, setAllProduct] = useState(products)

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    }
    useEffect (() => {
        if(category === "PROPERTY"){
            const FilterProduct = products.filter(item => item.category === "Property")
                console.log(FilterProduct);
                setAllProduct(FilterProduct)
          }
    },[category])
    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
           <div>
            <CommonSection title="Property List"></CommonSection>
           </div>
            <section className='mt-3'>
                <Carousel></Carousel>
            </section>

            <section className='container'>
                <p className='property_p'>Electronics & Appliances in Chennai</p>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6 property_box'>
                        <div className='electronic fix_height'>
                            <div className='justify-content-between d-flex mt-3'>
                                <h4 data-bs-toggle="collapse" href="#collapseExample"  aria-controls="collapseExample">Categories </h4>
                                <i className="ri-arrow-down-s-line mt-2" data-bs-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample"></i>
                            </div>
                            <div class="collapse" id="collapseExample">
                                <div class="card card-body">
                                    <h5 data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Electronics & Appliances<i class="ri-arrow-down-s-line"></i></h5>
                                    <div class="collapse" id="collapseExample2">
                                        <div class="card card-body">
                                            <ul className="Property_menu">
                                                <li>For Sale : Houses & Apartment</li>
                                                <li>For Rent : Houses & Apartment </li>
                                                <li>Lands & Plots</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h5 data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">Property<i class="ri-arrow-down-s-line"></i></h5>
                                    <div class="collapse" id="collapseExample3">
                                        <div class="card card-body">
                                            <ul className="Property_menu">
                                                <li>For Sale : Houses & Apartment</li>
                                                <li>For Rent : Houses & Apartment</li>
                                                <li>Lands & Plots</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5 data-bs-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="false" aria-controls="collapseExample">Bike<i class="ri-arrow-down-s-line"></i></h5>
                                    <div class="collapse" id="collapseExample4">
                                        <div class="card card-body">
                                            <ul className="Property_menu">
                                                <li>Motorcycles</li>
                                                <li>Scooters</li>
                                                <li>Spare Parts</li>
                                                <li>Bicycles</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h5>Car</h5>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <div className='justify-content-between d-flex'>
                                <h4 data-bs-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">Location</h4>
                                <i className="ri-arrow-down-s-line mt-2" data-bs-toggle="collapse" href="#collapseExample1" aria-expanded="false" aria-controls="collapseExample"></i>
                            </div>
                            <div class="collapse" id="collapseExample1">
                                <div class="card card-body">
                                    <select className='select_border'>
                                        <option>Chennai , Tamil Nadu</option>
                                        <option>Mumbai, Maharashtra</option>
                                        <option>Ambattur</option>
                                        <option>Central Station</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Filter</h4>
                            <div className='justify-content-between d-flex'>
                                <h4 data-bs-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="false" aria-controls="collapseExample">Price</h4>
                                <i className="ri-arrow-down-s-line mt-2" data-bs-toggle="collapse" href="#collapseExample5" aria-expanded="false" aria-controls="collapseExample"></i>
                            </div>
                            <div class="collapse" id="collapseExample5">
                                <div class="card card-body">
                                    <button className='property_btn'>Below 1 Lac</button>
                                    <button className='property_btn mt-3'>1 Lac - 2 Lac</button>
                                    <button className='property_btn mt-3'>2 Lac - 3 Lac</button>
                                    <button className='property_btn mt-3'>3 Lac - 5 Lac</button>
                                    <button className='property_btn mt-3'>5 Lac And Above</button>
                                </div>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Type</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Houses & Villas
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Apartment
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Builders Floors
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Frame Houses
                                </label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Bedrooms</h4>
                            <button className='property_btn'>1+ Bedrooms</button>
                            <button className='property_btn mt-3'>2+ Bedrooms</button>
                            <button className='property_btn mt-3'>3+ Bedrooms</button>
                            <button className='property_btn mt-3'>4+ Bedrooms</button>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <div className='justify-content-between d-flex'>
                                <h4>Furnishing</h4>
                                <i className="ri-arrow-down-s-line mt-2"></i>
                            </div>
                            <button className='property_btn'>Furnishing</button>
                            <button className='property_btn mt-3'>Unfurnishing</button>
                            <button className='property_btn mt-3'>Semi-Furnishing</button>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Price Per SQ.FT</h4>
                            <img src='assets/img/chart.png' alt='' className='img-fluid'></img>
                            <div className='justify-content-between d-flex'>
                                <p>0</p>
                                <p>1,000,000 +</p>
                            </div>
                            <input type="range" class="form-range" min="0" max="5" id="customRange2"></input>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Bathrooms</h4>
                            <button className={`property_btn ${selectedOption === 1 ? 'selected' : ''}`} onClick={() => handleOptionClick(1)}> 1+ Bathrooms</button>
                            <button
                                className={`property_btn mt-3 ${selectedOption === 2 ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(2)}
                            >
                                2+ Bathrooms
                            </button>
                            <button
                                className={`property_btn mt-3 ${selectedOption === 3 ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(3)}
                            >
                                3+ Bathrooms
                            </button>
                            <button
                                className={`property_btn mt-3 ${selectedOption === 4 ? 'selected' : ''}`}
                                onClick={() => handleOptionClick(4)}
                            >
                                4+ Bathrooms
                            </button>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Construction Status</h4>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Under Construction
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Ready to Move
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    New Launch
                                </label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Listed By</h4>
                            <div className="form-check ">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Owner
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Delear
                                </label>
                            </div>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                                <label className="form-check-label check_label" for="defaultCheck1">
                                    Builder
                                </label>
                            </div>
                        </div>
                        <hr></hr>
                        <div className='electronic'>
                            <h4>Super Buildup Area</h4>
                            <div className='justify-content-between d-flex'>
                                <p>0</p>
                                <p>1,000,000 +</p>
                            </div>
                            <input type="range" class="form-range" min="0" max="10000" id="customRange2"></input>
                        </div>
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-6'>
                        <div className='row'>
                            {
                                allProduct.map((item) => {
                                    return (
                                        <div className='col-lg-4 col-md-6 col-sm-6 col-6 mb-4' key={item.id}>
                                            <ProductCard items={item}></ProductCard>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='text-center'>
                            <button className='model_btn'><img src='assets/img/loader.png' alt='' className='img-fluid pe-2' width="15%"></img>Load more</button>
                        </div>
                    </div>
                </div>

            </section>


            <section className='container home_box mt-4'>
                <div className='row'>
                    <div className='col-lg-7 col-md-7 col-sm-12'>
                        <div className='home_text'>
                            <h4 className='home_h'>Download My mediator Mobile App</h4>
                            <p className='home_p'><img src='assets/img/vector.png' alt='' className='img-fluid me-2' width="12px"></img>Get to know about newly posted property as soon they are posted</p>
                            <p className='home_p'><img src='assets/img/vector.png' alt='' className='img-fluid me-2' width="12px"></img>Manage your property and purchase & sale your property</p>
                            <div className=''>
                                <img src='assets/img/logo3.png' alt='' className='img-fluid' width="25%"></img>
                                <img src='assets/img/logo4.png' alt='' className='img-fluid' width="22%"></img>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-5 col-sm-12'>
                        <img src='assets/img/iphone15.png' alt='' className='img-fluid home_img' width="90%"></img>
                    </div>
                </div>
            </section>
        </div>
    )
}
