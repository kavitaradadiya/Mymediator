import React, { useState } from 'react';
import { FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';

export default function LocationSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Chennai, Tamil Nadu");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSelect = (location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };

  return (
    <div className="location-select-container">
      <div className="selected-location" onClick={toggleDropdown}>
        <FaMapMarkerAlt />
        <span>{selectedLocation}</span>
        <span className="arrow">{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-item" onClick={() => handleSelect("Use Current Location")}>
            <FaLocationArrow /> Use Current Location
          </div>

          <div className="dropdown-section-title">Recent Location</div>
          <div className="dropdown-item" onClick={() => handleSelect("Tamil Nadu")}>
            <FaMapMarkerAlt /> Tamil Nadu
          </div>

          <div className="dropdown-section-title">Popular Location</div>
          <div className="dropdown-item" onClick={() => handleSelect("Chennai, Tamil Nadu")}>
            <FaMapMarkerAlt /> Chennai, Tamil Nadu
          </div>
          <div className="dropdown-item" onClick={() => handleSelect("Ambattur")}>
            <FaMapMarkerAlt /> Ambattur
          </div>
          <div className="dropdown-item" onClick={() => handleSelect("Padi")}>
            <FaMapMarkerAlt /> Padi
          </div>
          <div className="dropdown-item" onClick={() => handleSelect("Central Station")}>
            <FaMapMarkerAlt /> Central Station
          </div>
        </div>
      )}
    </div>
  );
}
