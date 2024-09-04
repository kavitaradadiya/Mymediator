import React from 'react'

export default function Footer() {
  return (
    <div>
      <section className='container-fluid footer_bg'>
        <div className='container pt-4'>
          <div className='row'>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <div>
                <img src='assets/img/logo2.png' className='img-fluid' alt=''></img>
              </div>
              <div className='mt-4'>
                <p className='footer_p'>In other words, he gets up every morning to help people in his community find their dream home</p>
              </div>
              <div className='footer_logo'>
                <img src='assets/img/logo3.png' alt='' className='img-fluid' width="50%"></img>
                <img src='assets/img/logo4.png' alt='' className='img-fluid' width="43%"></img>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6 mx-auto d-block'>
              <h6 className='footer_h'>Categories</h6>
              <ul className='footer_menu'>
                <li>Car</li>
                <li>Bike</li>
                <li>Property</li>
                <li>Electronics</li>
              </ul>
            </div>

            <div className='col-lg-3 col-md-6 col-sm-6'>
              <h6 className='footer_h'>Quick Link</h6>
                <ul className='footer_menu'>
                  <li>About Us</li>
                  <li>Privacy Police</li>
                  <li>Terms&Condition</li>
                  <li>Enquiry</li>
                </ul>
            </div>
            <div className='col-lg-3 col-md-6 col-sm-6'>
              <h6 className='footer_h'>Contact Us</h6>
               <div className='footer_p'>
                  <p><i className="ri-mail-fill text-light pe-2"></i>Discount mark@gmail.com</p>
                  <p><i className="ri-phone-fill text-light pe-2"></i>+91 96452 23547</p>
                  <p><img src='assets/img/icon.png' alt='' className='img-fluid pe-2' width="20px"></img>NO 3/1,1ST STREET , MAMBALAM,CHENNAI-60033</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
