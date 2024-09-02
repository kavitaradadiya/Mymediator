import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
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
                                    <div className="input-group mb-3 custom-input-group">
                                        <div className="input-group-prepend">
                                            <i className="ri-search-line input-group-text custom-icon"></i>
                                        </div>
                                        <input type="text" className="form-control custom-input" placeholder="What in your mind ?"></input>
                                    </div>

                                </div>
                                <div className='col-lg-1 col-md-1 col-sm-0 col-sm-1 d-lg-block d-md-block d-sm-none d-none'>
                                    <div className='position-relative'>
                                        <img src='assets/img/bell1.png' className='img-fluid ' width="50%" alt=''></img>
                                        <span className="position-absolute translate-middle badge rounded-pill badge-set">.</span>
                                    </div>

                                </div>
                                <div className='col-lg-2 col-md-3 col-sm-3'>
                                    <button className='btn header_btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login/Sign up</button>
                                    {/* <!-- Modal --> */}
                                    <div className="modal fade" id="staticBackdrop" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-body ">
                                                    <div className='row'>
                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 mt-4'>
                                                            <h5 className="modal-title text-center fw-bold" id="staticBackdropLabel">Login</h5>
                                                            <div className='mt-2'>
                                                                <input type='number' placeholder='Mobile number' className='form-control input_field'></input>
                                                            </div>
                                                            <div className='mt-3'>
                                                                <input type='password' placeholder='Enter the Password' className='form-control input_field'></input>
                                                                <p className='model_p'>Forget password ?</p>
                                                            </div>
                                                            <div>
                                                                <button className='model_btn'>Login</button>
                                                            </div>
                                                            <div className='mt-2'>
                                                                <p className='model_p1'>Didn't have an account ? <span className='text-dark fw-bold' data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</span></p>

                                                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="true" data-bs-keyboard="true">
                                                                    <div class="modal-dialog">
                                                                        <div class="modal-content">
                                                                            <div class="modal-body">
                                                                                <div className='row'>
                                                                                    <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                                                                                        <h5 className="modal-title text-center fw-bold" id="staticBackdropLabel">Sign Up</h5>
                                                                                        <div className='mt-3'>
                                                                                            <input type='text' placeholder='Enter your name' className='form-control input_field'></input>
                                                                                        </div>
                                                                                        <div className='mt-3'>
                                                                                            <input type='number' placeholder='Mobile number' className='form-control input_field'></input>
                                                                                        </div>
                                                                                        <div className='mt-3'>
                                                                                            <input type='password' placeholder='Enter the Password' className='form-control input_field'></input>
                                                                                        </div>
                                                                                        <div className='mt-3'>
                                                                                            <button className='model_btn' data-bs-toggle="modal" data-bs-target="#kavita">Sign Up</button>

                                                                                            {/* <!-- Modal --> */}
                                                                                            <div class="modal fade" id="kavita" data-bs-backdrop="true" data-bs-keyboard="true" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                                                                <div class="modal-dialog">
                                                                                                    <div class="modal-content">
                                                                                                        <div class="modal-body">
                                                                                                            <div className='row'>
                                                                                                                <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                                                                                                                    <div className='mt-4'>
                                                                                                                        <h5 className="modal-title text-center fw-bold" id="staticBackdropLabel">OTP Verification</h5>
                                                                                                                    </div>
                                                                                                                    <div className='mt-3'>
                                                                                                                        <p className='model_p2 text-center'>Enter your OTP code here</p>
                                                                                                                    </div>
                                                                                                                    <div className='mt-2 text-center'>
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
                                                                                                                        <button className='model_btn'>Verify</button>
                                                                                                                    </div>
                                                                                                                </div>
                                                                                                                <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                                                                                                                    <img src='assets/img/Mask group3.png' alt='' className='img-fluid'></img>
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                                                                                        <img src='assets/img/Group 8933.png' alt='' className='img-fluid'></img>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                                                            <img src='assets/img/Mask group.png' alt='' className='img-fluid'></img>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-1 col-md-2 col-sm-2'>
                                    <select className='header_btn2'>
                                        <option value="volvo" hidden>English</option>
                                        <option value="saab">Hindi</option>
                                        <option value="opel">Gujrati</option>
                                    </select>
                                </div>
                                <div className='col-lg-2 col-md-2 col-sm-3'>
                                    <button className='header_btn5'>Sell</button>
                                </div>
                                <div className='col-lg-3 col-md-1 col-sm-0 d-lg-block d-md-none d-sm-none d-none'>
                                    <img src='assets/img/profile_pic.png' alt='' className='img-fluid' width="40px"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container'>
                <div className='row'>
                    <div className='col-lg-1 col-md-1 d-lg-block d-md-none d-sm-none d-none'>
                        <img src='assets/img/logo.png' alt='' className='img-fluid position-absolute header_img' width="9%"></img>
                    </div>
                    <div className='col-lg-8 col-md-0 col-sm-0 col-0 d-lg-block d-md-none d-sm-none d-none'>
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container-fluid">
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <div className='nav-item dropdown'>
                                            <Link className="dropbtn nav-link" to="/" >All Category<i class="ri-arrow-down-s-line ps-1 pt-5"></i></Link>
                                            <ul class="dropdown-menu dropdown-content border border-0" aria-labelledby="dropdownMenuLink">
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
                                        <li class="nav-item">
                                            <Link className="nav-link text-dark" >Electronics</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link text-dark" to="/property" >Property</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link text-dark" >Bike</Link>
                                        </li>
                                        <li class="nav-item">
                                            <Link className="nav-link text-dark" >Car</Link>
                                        </li>
                                    </ul>
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
                                            <div class="">
                                                <Link className="nav-link text-dark " to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">All categories<i class="ri-arrow-down-s-line"></i></Link>
                                                <div class="collapse" id="collapseExample">
                                                    <div class="card">
                                                        <ul className='sub_menu'>
                                                            <li className="nav-item"><Link className="nav-link text-dark" to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">Property</Link>
                                                                <div class="collapse" id="collapseExample1">
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
                                                            <li className="nav-item"><Link className="nav-link text-dark" to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">Electronics</Link>
                                                                <div class="collapse" id="collapseExample2">
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
                                                            <li className="nav-item"><Link className="nav-link text-dark" to="/" data-bs-toggle="collapse" href="#collapseExample" data-bs-target="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample">Bike</Link>
                                                                <div class="collapse" id="collapseExample3">
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

                        <div className='select-wrapper'>
                            <i className="ri-map-pin-line text-danger location-icon"></i>
                            <select className='header_btn4'>
                                <option hidden>Chennai, Tamil Nadu</option>
                                <option className='header_op1'>Use current Location</option>
                                <hr></hr>
                                <option className='header_op'>Recent Option</option>
                                <option className='header_op1'>Tamil Nadu</option>
                                <hr></hr>
                                <option className='header_op'>Popular Location</option>
                                <option value="saab" className='header_op1'>Mumbai, Maharashtra</option>
                                <option className='header_op1'>Ambattur</option>
                                <option className='header_op1'>Padi</option>
                                <option className='header_op1'>Central Station</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}





<div className='select-wrapper'>
    <i className="ri-map-pin-line text-danger pe-2"></i>
    <select className='header_btn4'>
        <option value="volvo" hidden>Chennai, Tamil Nadu</option>
        <option value="saab">Mumbai, Maharashtra</option>
        <option value="opel">Kolkata, West Bengal</option>
        <option value="opel">Pune, Maharashtra</option>
        <option value="opel">Hyderabad, Telangana</option>
    </select>
</div>