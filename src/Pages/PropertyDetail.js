import React from 'react'
import CommonSection from '../Components/CommonSection'
import products from '../Components/Fakedata/product';

export default function PropertyDetail() {

  return (
    <div>
       <div> <CommonSection title="Property Detail"></CommonSection></div>

       <section className='container mt-3 mb-3'>
         <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-6'>
                        <img src="assets/img/frame11.png" alt='' className='img-fluid mt-2'></img>
                        <img src="assets/img/frame11.png" alt='' className='img-fluid mt-2'></img>
                        <img src="assets/img/frame11.png" alt='' className='img-fluid mt-2'></img>
                    </div>
                    <div className='col-lg-8 col-md-8 col-sm-6 mt-3'>
                    <img src="assets/img/frame11.png" alt='' className='img-fluid Property_img'></img>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12 col-12'></div>
         </div>
       </section>
    </div>
  )
}
