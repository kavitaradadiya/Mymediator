import React from 'react'
import products from '../Components/Fakedata/product'
import ProductCard from './Category/ProductCard'
import Carousel from './Slider/Carousel'

export default function Home() {
  
  return (
    <div style={{backgroundColor:"#F6F6F6"}}>
     <Carousel></Carousel>

     <section className='container mt-5 mb-3'>
      <div className='row'>
        {
          products.map((item) => {
            return (
              <div className='col-lg-3 col-md-3 col-sm-4 col-6 mb-4' key={item.id}>
                <ProductCard items={item}></ProductCard>
              </div>
            )
          })
        }
      </div>
    </section>

    <section className='container mb-4'>
        <div className='row'>
          <div className='text-center'>
            <button className='model_btn'><img src='assets/img/loader.png' alt='' className='img-fluid pe-2' width="15%"></img>Load more</button>
          </div>
        </div>
    </section>

    <section className='container home_box'>
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
