import React from 'react';
import './TopNavbar.css';
import wheelsEmiLogo from '../assets/wheels-emi.gif'; // Replace with your actual path
import bbLogo from '../assets/bblogo.png'; // Replace with your actual path

const TopNavbar = () => {
  return (
    <div className="top-navbar">
      <img src={bbLogo} alt="bike bazaar Logo" className="logo-left" />
      <div className="logo-center">Wheelsemi Pvt Ltd</div>
      <img src={wheelsEmiLogo} alt="Wheels EMI Logo" className="logo-right" />
    </div>
  );
};

export default TopNavbar;
