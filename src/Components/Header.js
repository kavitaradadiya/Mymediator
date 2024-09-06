import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bell from '../img/bell1.png'
import logo from '../img/logo.png'
import mask1 from '../img/Mask group.png'
import mask2 from '../img/Group 8933.png'
import mask3 from '../img/Mask group3.png'
import '../Pages/assets/css/Header.css'
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';



export default function Header() {
    const [phone, setPhone] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('Chennai, Tamil Nadu');
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const openModal = (modalId) => {
        const modalElement = document.getElementById(modalId);
        const modal = new window.bootstrap.Modal(modalElement);
        modal.show();
      };
    
      const closeModal = (modalId) => {
        const modalElement = document.getElementById(modalId);
        const modal = window.bootstrap.Modal.getInstance(modalElement);
        modal.hide();
      };
    
      const handleSignUpLinkClick = () => {
        closeModal('loginModel');
        openModal('exampleModal');
      };
    
      const handleSignUpButtonClick = () => {
        closeModal('exampleModal');
        openModal('otpModel');
      };

      const handleOtpButtonClick = () => {
        closeModal('otpModel');
      };

    const handleSelectLocation = (location) => {
        setSelectedLocation(location);
        setDropdownOpen(false);
    };
   

    return (
        <>
            <section className='container-fluid header_bg'>
                <div className='row'>
                    <div className='col-lg-2 col-md-0 col-sm-0'>
                        <div>
                            {/* <img src='assets/img/logo.png' alt='' className='img-fluid'></img> */}
                        </div>
                    </div>
                    <div className='col-lg-10 col-md-12 col-sm-12 pt-2'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-3 col-sm-4'>
                                    <div className="input-group mb-3 custom-input-group mt-1">
                                        <div className="input-group-prepend ">
                                            <i className="ri-search-line input-group-text custom-icon"></i>
                                        </div>
                                        <input type="text" className="custom-input" placeholder="What in your mind ?"></input>
                                    </div>

                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-0  d-lg-block d-md-block d-sm-none d-none'>
                                    <div className='position-relative mt-2'>
                                        <img src={bell} className='img-fluid mx-auto d-block bell_icon' alt=''></img>
                                        <span className="position-absolute translate-middle badge rounded-pill badge-set">.</span>
                                    </div>

                                </div>
                                <div className='col-lg-3 col-md-3 col-sm-3 mx-auto d-block mt-2 '>
                                    <button className='btn header_btn' data-bs-toggle="modal" data-bs-target="#loginModel">Login/Sign up</button>
                                    {/* <!-- Login-Modal --> */}
                                    <div className="modal fade" id="loginModel" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
                                        <div className="modal-dialog  modal-lg Property_model_size">
                                            <div className="modal-content">
                                                <div className="modal-body p-0 ">
                                                    <div className='row'>
                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-12 mt-4 '>
                                                            <div className=''>
                                                                <h5 className="modal-title text-center fw-bold mb-4" id="staticBackdropLabel">Login</h5>
                                                                <div className='mt-3'>
                                                                    <input type='number' placeholder='Mobile number' className='form-control input_field'></input>
                                                                </div>
                                                                <div className='mt-4'>
                                                                    <input type='password' placeholder='Enter the Password' className='form-control input_field'></input>
                                                                    <p className='model_p mt-2'>Forget password ?</p>
                                                                </div>
                                                                <div>
                                                                    <button className='model_btn'>Login</button>
                                                                </div>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <p className='model_p1 text-center'>Didn't have an account ? <span className='text-dark fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal"  data-bs-dismiss="modal" aria-label="Close" onClick={handleSignUpLinkClick}   >Sign Up</span></p>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                                            <img src={mask1} alt='' className='img-fluid'></img>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* -------------SignUp-model----------- */}
                                <div className="modal fade" id="exampleModal" tabInd ex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
                                    <div className="modal-dialog modal-lg model_size">
                                        <div className="modal-content ">
                                            <div className="modal-body p-0">
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                                        <h5 className="modal-title text-center fw-bold mb-3" id="staticBackdropLabel">Sign Up</h5>
                                                        <div className='mt-4'>
                                                            <input type='text' placeholder='Enter your name' className='form-control input_field'></input>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <PhoneInput
                                                                country={'in'} // Default country
                                                                value={phone}
                                                                onChange={(phone) => setPhone(phone)}
                                                                inputStyle={{
                                                                    width: '100%',
                                                                    height: '45px',
                                                                    borderRadius: '8px',
                                                                    border: '1px solid #ddd',
                                                                    paddingLeft: '50px'
                                                                }}
                                                                buttonStyle={{
                                                                    borderRadius: '8px 0 0 8px',
                                                                    border: '1px solid #ddd'
                                                                }}
                                                                dropdownStyle={{
                                                                    borderRadius: '8px',
                                                                }}
                                                                placeholder="Mobile Number"
                                                            />
                                                        </div>
                                                        <div className='mt-4'>
                                                            <input type='password' placeholder='Enter the Password' className='form-control input_field'></input>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <button className='model_btn' data-bs-toggle="modal" data-bs-target="#otpModel"  data-bs-dismiss="modal" aria-label="Close" onClick={handleSignUpButtonClick} >Sign Up</button>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                                        <img src={mask2} alt='' className='img-fluid'></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ----------------verificaton-model--------- */}
                                <div className="modal fade" id="otpModel" data-bs-backdrop="true" data-bs-keyboard="true" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog  modal-lg model_size">
                                        <div className="modal-content">
                                            <div className="modal-body p-0">
                                                <div className='row'>
                                                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                                        <div className='mt-4'>
                                                            <h5 className="modal-title title_model mb-4" id="staticBackdropLabel">OTP Verification</h5>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <p className='model_p2 text-center'>Enter your OTP code here</p>
                                                        </div>
                                                        <div className='mb-4 text-center'>
                                                            <div className='row'>
                                                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'><input type='text' className='model_btn3' size="1" placeholder='2'></input></div>
                                                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'> <input type='text' className='model_btn4' size="1" ></input> </div>
                                                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'> <input type='text' className='model_btn4' size="1" ></input> </div>
                                                                <div className='col-lg-3 col-md-3 col-sm-3 col-3'> <input type='text' className='model_btn4' size="1" ></input> </div>
                                                            </div>
                                                        </div>
                                                        <div className='mt-3'>
                                                            <p className='model_p1 text-center'>Don't receive code ? <span className='text-dark fw-bold'>Resend</span></p>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <button className='model_btn'onClick={handleOtpButtonClick}  data-bs-dismiss="modal" aria-label="Close">Verify</button>
                                                        </div>
                                                    </div>
                                                    <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
                                                        <img src={mask3} alt='' className='img-fluid'></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='col-lg-1 col-md-2 col-sm-2 mt-1'>
                                    <select className='header_btn2'>
                                        <option value="volvo" hidden>English</option>
                                        <option value="saab">Hindi</option>
                                        <option value="opel">Gujrati</option>
                                    </select>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-3 mt-2'>
                                    <button className='header_btn5'>Sell</button>
                                </div>
                                <div className='col-lg-2 col-md-1 col-sm-0 d-lg-block d-md-none d-sm-none d-none'>
                                    <img src='assets/img/profile_pic.png' alt='' className='img-fluid ms-4' width="50px"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='col-lg-1 col-md-1 d-lg-block d-md-none d-sm-none d-none'>
                        <Link to='/'> <img src={logo} alt='' className='img-fluid position-absolute header_img' width="9%"></img></Link>
                    </div>
                    <div className='col-lg-8 col-md-0 col-sm-0 col-0 d-lg-block d-md-none d-sm-none d-none'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <div className='d-flex justify-content-between w-100'>
                                        <ul className="navbar-nav">
                                            <div className='nav-item dropdown'>
                                                <Link className="dropbtn nav-link" to="/" >All Category<i className="ri-arrow-down-s-line ps-1 pt-5"></i></Link>
                                                <ul className="dropdown-menu dropdown-content border border-0" aria-labelledby="dropdownMenuLink">
                                                    <div className='row'>
                                                        <div className='col-lg-4 col-md-4 col-sm-6'>
                                                            <h6 style={{ fontSize: "14px", paddingTop: "10px", paddingLeft: "20px", fontWeight: "600" }}>Property</h6>
                                                            <div className='link-text'>
                                                                <Link to="">For Sale: Houses & Apartments</Link>
                                                                <Link to="">For Rent: Houses & Apartments</Link>
                                                                <Link to="">Lands & Plots</Link>
                                                                <Link to="">For Rent: Shops & Offices</Link>
                                                                <Link to="">For Sale: Shops & Offices</Link>
                                                                <Link to="">PG & Guest Houses</Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <h6 style={{ fontSize: "15px", paddingTop: "10px", paddingLeft: "20px", fontWeight: "600" }}>Electronics</h6>
                                                            <div className='link-text'>
                                                                <Link to="">TVs, Video - Audio</Link>
                                                                <Link to="">Kitchen & Other Appliances</Link>
                                                                <Link to="">Computers & Laptops</Link>
                                                                <Link to="">Cameras & Lenses</Link>
                                                                <Link to="">Games & Entertainment</Link>
                                                                <Link to="">Fridges</Link>
                                                                <Link to="">Computer Accessories</Link>
                                                                <Link to="">Hard Disks, Printers & Monitors</Link>
                                                                <Link to="">ACs</Link>
                                                                <Link to="">Washing Machines</Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-3 col-md-3 col-sm-6'>
                                                            <h6 style={{ fontSize: "15px", paddingTop: "10px", paddingLeft: "20px", fontWeight: "600" }}>Bike</h6>
                                                            <div className='link-text'>
                                                                <Link to="">  Motorcycles</Link>
                                                                <Link to="">Scooters</Link>
                                                                <Link to="">Spare Parts</Link>
                                                                <Link to="">Bicycles</Link>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-2 col-md-2 col-sm-6'>
                                                            <h6 style={{ fontSize: "15px", paddingTop: "10px", paddingLeft: "20px", fontWeight: "600" }}>Car</h6>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                            <li className="nav-item">
                                                <Link className="nav-link text-dark" to="/property" >Property</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-dark" to="/selling" >Electronics</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-dark" to="">Car</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link text-dark" >Bike</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-12 col-12 d-lg-none d-md-block d-sm-block'>
                        <nav className="navbar navbar-expand-lg navbar-light p-2 justify-content-center justify-content-around ">
                            <div className="container-fluid">
                                <button className="navbar-toggler drop-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav menu">
                                        <li className="nav-item">
                                            <div className="">
                                                <Link className="nav-link text-dark " to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">All categories<i className="ri-arrow-down-s-line"></i></Link>
                                                <div className="collapse" id="collapseExample">
                                                    <div className="card">
                                                        <ul className='sub_menu'>
                                                            <li className="nav-item"><Link className="nav-link text-dark" to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">Property<i className="ri-arrow-down-s-line ps-1 pt-5"></i></Link>
                                                                <div className="collapse" id="collapseExample1">
                                                                    <ul className='link-text sub_menu1'>
                                                                        <Link to="">For Sale: Houses & Apartments</Link><br></br>
                                                                        <Link to="">For Rent: Houses & Apartments</Link><br></br>
                                                                        <Link to="">Lands & Plots</Link><br></br>
                                                                        <Link to="">For Rent: Shops & Offices</Link><br></br>
                                                                        <Link to="">For Sale: Shops & Offices</Link><br></br>
                                                                        <Link to="">PG & Guest Houses</Link><br></br>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="nav-item"><Link className="nav-link text-dark" to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Electronics<i className="ri-arrow-down-s-line ps-1 pt-5"></i></Link>
                                                                <div className="collapse" id="collapseExample2">
                                                                    <ul className='link-text sub_menu1'>
                                                                        <Link to="">TVs, Video - Audio</Link><br></br>
                                                                        <Link to="">Kitchen & Other Appliances</Link><br></br>
                                                                        <Link to="">Computers & Laptops</Link><br></br>
                                                                        <Link to="">Cameras & Lenses</Link><br></br>
                                                                        <Link to="">Games & Entertainment</Link><br></br>
                                                                        <Link to="">Fridges</Link><br></br>
                                                                        <Link to="">Computer Accessories</Link><br></br>
                                                                        <Link to="">Hard Disks, Printers & Monitors</Link><br></br>
                                                                        <Link to="">ACs</Link><br></br>
                                                                        <Link to="">Washing Machines</Link>
                                                                    </ul>
                                                                </div></li>
                                                            <li className="nav-item"><Link className="nav-link text-dark" to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">Bike<i className="ri-arrow-down-s-line ps-1 pt-5"></i></Link>
                                                                <div className="collapse" id="collapseExample3">
                                                                    <ul className='link-text sub_menu1'>
                                                                        <Link to="">  Motorcycles</Link><br></br>
                                                                        <Link to="">Scooters</Link><br></br>
                                                                        <Link to="">Spare Parts</Link><br></br>
                                                                        <Link to="">Bicycles</Link>
                                                                    </ul>
                                                                </div>
                                                            </li>
                                                            <li className="nav-item"><Link className="nav-link text-dark">Car</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="">Property</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="">Electronics</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="">Car</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link text-dark" to="">Bike</Link>
                                        </li>
                                        <li>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className='col-lg-3 col-md-4 col-sm-12 col-12'>

                        <div className="custom-dropdown">
                            <div className="dropdown-header" onClick={() => setDropdownOpen(!isDropdownOpen)}>
                                <i classname="ri-search-line pe-2"></i>
                                {selectedLocation}
                                <span className={`arrow ${isDropdownOpen ? 'open' : ''}`}>&#9662;</span>
                            </div>

                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <div className="dropdown-section">
                                        {/* <h4 className='dropdown_li'>Use Current Location</h4> */}
                                        <div className="dropdown-item dropdown_li" onClick={() => handleSelectLocation('Use Current Location')}>
                                            <i classname="ri-focus-3-fill pe-2"></i>
                                            Use Current Location
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="dropdown-section">
                                        <h5>Recent Location</h5>
                                        <div className="dropdown-item dropdown_li" onClick={() => handleSelectLocation('Tamil Nadu')}>
                                            <i classname="ri-map-pin-line pe-2"></i>
                                            Tamil Nadu
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="dropdown-section">
                                        <h5>Popular Location</h5>
                                        <div className="dropdown-item dropdown_li" onClick={() => handleSelectLocation('Chennai, Tamil Nadu')}>
                                            <i classname="ri-map-pin-line pe-2"></i>
                                            Chennai, Tamil Nadu
                                        </div>
                                        <div className="dropdown-item dropdown_li" onClick={() => handleSelectLocation('Ambattur')}>
                                            <i classname="ri-map-pin-line pe-2"></i>
                                            Ambattur
                                        </div>
                                        <div className="dropdown-item dropdown_li" onClick={() => handleSelectLocation('Padi')}>
                                            <i classname="ri-map-pin-line pe-2"></i>
                                            Padi
                                        </div>
                                        <div className="dropdown-item dropdown_li" onClick={() => handleSelectLocation('Central Station')}>
                                            <i classname="ri-map-pin-line pe-2"></i>
                                            Central Station
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
