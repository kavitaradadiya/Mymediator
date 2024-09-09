import React, { useState } from 'react'
import CommonSection from '../Components/CommonSection'
import './assets/css/PropertyList.css'


export default function PropertyList() {
  const [formValues, setFormValues] = useState({
    propertyName: "",
    mobileNumber: "",
    bedrooms: "",
    propertyType: "",
    bathrooms: "",
    furnished: "",
    listedBy: "",
    superBuiltupArea: "",
    carpetArea: "",
    bachelorsAllowed: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    buildingFacing: "",
    carParking: "",
    description: "",
    amount: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
    // Handle form submission here
  };

  //  ------------------for_images-----------

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };



  // ----------for-video----------
  const [video, setVideo] = useState(null);

  const handleVideoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setVideo(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <div style={{ backgroundColor: "#F6F6F6" }}>
      <div>
        <CommonSection title="Sale ( House & Apartment )"></CommonSection>
      </div>

      <section className='container sale_box my-4'>

        <form className="property-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sale ( Houses & Apartment )</h2>
          <div className="row mb-3">
            {/* Row with 3 inputs */}
            <div className="col-md-4 mb-4">
              <label className='form-label ps-2'>Property Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter property name"
                name="propertyName"
                value={formValues.propertyName}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Mobile Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter mobile number"
                name="mobileNumber"
                value={formValues.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Bedrooms</label>
              <select
                className="form-control select_box"
                name="bedrooms"
                value={formValues.bedrooms} 
              >
                <option value="">Select Bedrooms</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
              </select>
            </div>
          </div>

          {/* Another Row with 3 inputs */}
          <div className="row mb-3">
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Property Type</label>
              <select
                className="form-control"
                name="propertyType"
                value={formValues.propertyType}
                onChange={handleChange}
              >
                <option value="">Select Property Type</option>
                <option value="Apartment">Apartment</option>
                <option value="Villa">Villa</option>
                <option value="House">House</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Bathrooms</label>
              <select
                className="form-control"
                name="bathrooms"
                value={formValues.bathrooms}
                onChange={handleChange}
              >
                <option value="">Select Bathrooms</option>
                <option value="1">1 Bathroom</option>
                <option value="2">2 Bathrooms</option>
                <option value="3">3 Bathrooms</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Furnished</label>
              <select
                className="form-control"
                name="furnished"
                value={formValues.furnished}
                onChange={handleChange}
              >
                <option value="">Furnished</option>
                <option value="Fully">Fully Furnished</option>
                <option value="Semi">Semi Furnished</option>
                <option value="Unfurnished">Unfurnished</option>
              </select>
            </div>
          </div>

          {/* More Rows for Other Inputs */}
          <div className="row mb-3">
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Listed By</label>
              <select
                className="form-control"
                name="listedBy"
                value={formValues.listedBy}
                onChange={handleChange}
              >
                <option value="">Select Listed</option>
                <option value="Owner">Owner</option>
                <option value="Agent">Agent</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Super Builtup Area (SQ. FT)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Select SQ.FT"
                name="superBuiltupArea"
                value={formValues.superBuiltupArea}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Carpet area SQ . FT</label>
              <input
                type="text"
                className="form-control"
                placeholder="Select carpet SQ . FT"
                name="carpetArea"
                value={formValues.carpetArea}
                onChange={handleChange}
              />
            </div>

          </div>

          <div className='row mb-3'>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Maintenance</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter monthly Amount"
                name="maintenance"
                value={formValues.maintenance}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2' >Bachelors Allowed</label>
              <select
                className="form-control"
                name="bachelorsAllowed"
                value={formValues.bachelorsAllowed}
                onChange={handleChange}
              >
                <option value="">Select option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label'>Total Floors</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter total floors"
                name="totalFloors"
                value={formValues.totalFloors}
                onChange={handleChange}
              />
            </div>

          </div>
          <div className='row mb-3'>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Floor No</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Floor no"
                name="floorNo"
                value={formValues.floorNo}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Building Facing</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Building Fcing"
                name="buildingFacing"
                value={formValues.buildingFacing}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Car Parking</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Car Parking"
                name="carParking"
                value={formValues.carParking}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="col-12 mb-4">
            <label className='form-label ps-2'>Description</label>
            <textarea
              className="form-control form_input"
              placeholder="Enter Description"
              rows="3"
              name="description"
              value={formValues.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className='row mb-3'>
            <div className="col-md-4 mb-3">
              <label className='form-label ps-2'>Amount</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Amount"
                name="amount"
                value={formValues.amount}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-4 mb-3 upload-container">
              <label className="form-label">Image Upload</label>
              <div className="upload-box">
                <div className="upload-icon">
                  {image ? (
                    <img src={image} alt="Uploaded" className="uploaded-image" />
                  ) : (
                    <>
                      <div>
                        <i class="ri-upload-2-fill fs-2"></i>
                        <i class="ri-image-2-fill fs-2"></i>
                      </div>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="upload-input"
                  onChange={handleImageChange}
                />
              </div>
            </div>


            <div className="col-md-4 mb-3  upload-container">
              <label className="form-label">Video Upload</label>
              <div className="upload-box">
                <div className="upload-icon">
                  {video ? (
                    <video controls className="uploaded-video">
                      <source src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <>
                      <div>
                        <i class="ri-upload-2-fill fs-2"></i>
                        <i class="ri-image-2-fill fs-2"></i>
                      </div>
                    </>
                  )}
                </div>
                <input
                  type="file"
                  accept="video/*"
                  className="upload-input"
                  onChange={handleVideoChange}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-block mx-auto d-block"> Submit </button>


        </form>
      </section >
    </div >
  )
}
