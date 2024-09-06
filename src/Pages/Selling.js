import React from 'react'
import CommonSection from '../Components/CommonSection'
import '../Pages/assets/css/Selling.css'
import house from '../img/house_img.png'
import car from '../img/car_img.png'
import electronic from '../img/electronic_img.png'
import bike from '../img/bike_img.png'
import arrow from '../img/arrow2.png'

export default function Selling() {
    return (
        <div style={{ backgroundColor: "#F6F6F6" }}>
            <div>
                <CommonSection title="Selling"></CommonSection>
            </div>

            <section className='container-fluid py-4'>
                <div className='row'>
                    <div className='col-lg-2 col-md-2 col-sm-0 col-0'></div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div className='selling_box pb-5'>
                            <h3 className='text-center'>Select Categories</h3>
                            <div className='row'>
                               <div className='col-lg-1 col-md-1 col-sm-1'></div>
                               <div className='col-lg-4 col-md-5 col-sm-5 col-12'>
                                <img src={house} alt='' className='img-fluid'></img>
                               </div>
                              
                               <div className='col-lg-4 col-md-5 col-sm-5 col-12'>
                                <img src={electronic} className='img-fluid img_set'></img>
                               </div>
                              
                            </div>
                            <div className='row pt-4'>
                            <div className='col-lg-1 col-md-1 col-sm-1'></div>
                               <div className='col-lg-4 col-md-3 col-sm-3'>
                                <img src={car} alt='' className='img-fluid'></img>
                               </div>
                               <div className='col-lg-1 col-md-1 col-sm-1'></div>
                               <div className='col-lg-4 col-md-3 col-sm-3'>
                                <img src={bike} className='img-fluid'></img>
                               </div>
                               <div className='col-lg-1 col-md-1 col-sm-1'></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12 col-12'>
                        <div>
                            <button className='sell_btn'>For Sale : Houses & Apartment <img src={arrow} className='img-fluid' width="30px"></img></button>
                        </div>
                        <div className='mt-4'>
                            <button className='sell_btn'>For Rent : Houses & Apartment  <img src={arrow} className='img-fluid' width="30px"></img></button>
                        </div>
                        <div className='mt-4'>
                            <button className='sell_btn'>Lands & Plots <img src={arrow} className='img-fluid' width="30px"></img></button>
                        </div>
                        <div className='mt-4'>
                            <button className='sell_btn'>For Rent : Shops & Offices <img src={arrow} className='img-fluid' width="30px"></img></button>
                        </div>
                        <div className='mt-4'>
                            <button className='sell_btn'>For Sale : Shops & Offices <img src={arrow} className='img-fluid' width="30px"></img></button>
                        </div>
                        <div className='mt-4'>
                            <button className='sell_btn'>PG & Guest Houses <img src={arrow} className='img-fluid' width="30px"></img></button>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-0 col-0'></div>
                </div>
            </section>
        </div>
    )
}
