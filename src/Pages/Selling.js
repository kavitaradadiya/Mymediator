import React, { useState } from 'react'
import CommonSection from '../Components/CommonSection'
import '../Pages/assets/css/Selling.css'
import house1 from '../img/house_img.png'
import house2 from '../img/house2.png'
import car1 from '../img/car_img.png'
import car2 from '../img/car2.png'
import electronic1 from '../img/electronic_img.png'
import electronic2 from '../img/electronic2.png'
import bike1 from '../img/bike_img.png'
import bike2 from '../img/bike2.png'
import arrow from '../img/arrow2.png'

export default function Selling() {
    const [currentImages, setCurrentImages] = useState({
        house: house1,
        car: car1,
        electronic: electronic1,
        bike: bike1,
    });
    const [selectedCategory, setSelectedCategory] = useState('house');
    const handleImageClick = (category) => {
        setSelectedCategory(category); // Set the selected category

        // Update the images
        setCurrentImages({
            house: category === 'house' ? (currentImages.house === house2 ? house1 : house2) : house2,
            car: category === 'car' ? (currentImages.car === car1 ? car2 : car1) : car1,
            electronic: category === 'electronic' ? (currentImages.electronic === electronic1 ? electronic2 : electronic1) : electronic1,
            bike: category === 'bike' ? (currentImages.bike === bike1 ? bike2 : bike1) : bike1,
          });
        };



    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <div>
                <CommonSection title="Selling"></CommonSection>
            </div>

            <section className='container-fluid py-4'>
                <div className='row'>
                    <div className='col-lg-2 col-md-0 col-sm-0 col-0'></div>
                    <div className='col-lg-4 col-md-6 col-sm-6 col-12'>
                        <div className='selling_box pb-5'>
                            <h3 className='text-center'>Select Categories</h3>
                            <div className='row'>
                                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                                <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                                    <img
                                        src={currentImages.house}
                                        alt="House"
                                        className="img-fluid mx-auto d-block"
                                        width="70%"
                                        onClick={() => handleImageClick('house')}/>

                                </div>

                                <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                                    <img
                                        src={currentImages.electronic}
                                        alt="Electronic"
                                        className="img-fluid mx-auto d-block"
                                        width="70%"
                                        onClick={() => handleImageClick('electronic')}/>
                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                            </div>
                            <div className='row pt-4'>
                                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                                <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                                    <img
                                        src={currentImages.car}
                                        alt="Car"
                                        className="img-fluid mx-auto d-block"
                                        width="70%"
                                        onClick={() => handleImageClick('car')}
                                    />
                                </div>

                                <div className='col-lg-5 col-md-5 col-sm-5 col-12'>
                                    <img
                                        src={currentImages.bike}
                                        alt="Bike"
                                        className="img-fluid mx-auto d-block"
                                        width="70%"
                                        onClick={() => handleImageClick('bike')}
                                    />
                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-1'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-sm-6 col-12 '>

                        {/* ----------------House------------ */}
                        {selectedCategory === 'house' && (
                            <>
                                <div className=''>
                                    <button className='sell_btn'>For Sale : Houses & Apartment <img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>For Rent : Houses & Apartment  <img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Lands & Plots <img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>For Rent : Shops & Offices <img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>For Sale : Shops & Offices <img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>PG & Guest Houses <img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                            </>
                        )}

                        {/* --------------electronic------------ */}
                        {selectedCategory === 'electronic' && (
                            <>
                                <div className=''>
                                    <button className='sell_btn'>Television<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Computer<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Washing Machine<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Mobile Phone<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Laptop<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>

                                <div className=''>
                                    <button className='sell_btn'>Printers<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>AC<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Fridges<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>View All<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>

                            </>
                        )}
                        {/* ----------Bike---------- */}
                        {selectedCategory === 'bike' && (
                            <>
                                <div className=''>
                                    <button className='sell_btn'>Motorcycles<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Scooters<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Bicycles<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>View All<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                            </>
                        )}

                        {/* ------------car---------- */}
                        {selectedCategory === 'car' && (
                            <>
                                <div className=''>
                                    <button className='sell_btn'>TATA<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>HONDA<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>TOYOTA<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>
                                <div className=''>
                                    <button className='sell_btn'>Mahindra<img src={arrow} alt='' className='img-fluid' width="30px"></img></button>
                                </div>

                            </>
                        )}


                    </div>
                    <div className='col-lg-2 col-md-0 col-sm-0 col-0'></div>
                </div>
            </section>
        </div>
    )
}
