import React from 'react';
import './TopNavbar.css';
import wheelsEmiLogo from '../assets/wheels-emi-logo.gif'; // Replace with your actual path
import sumaLogo from '../assets/suma-logo.gif'; // Replace with your actual path

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <img src={wheelsEmiLogo} alt="Wheels EMI Logo" className="logo-left" />
      <div className="logo-center">Wheelsemi Pvt Ltd</div>
      <img src={sumaLogo} alt="Suma Logo" className="logo-right" />
    </div>
  );
};

export default TopNavbar;
