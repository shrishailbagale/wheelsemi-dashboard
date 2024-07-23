// Footer.js
import React from 'react';
import './Footer.css';
import wheelsEmiLogo from '../assets/wheels-emi-logo.gif'; // Replace with your actual path
import sumaLogo from '../assets/suma-logo.gif'; // Replace with your actual path


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Production Links:</h3>
        <ul>
          <li>Salesforce Link: <a href="https://wheelsltd.my.salesforce.com">https://wheelsltd.my.salesforce.com</a></li>
          <li>NGUCC login: <a href="https://192.168.3.253:8475">https://192.168.3.253:8475</a></li>
          <li>SOPHOS Link: <a href="https://192.168.202.6:8090/httpclient.html">https://192.168.202.6:8090/httpclient.html</a></li>
        </ul>
      </div>
      <div className="footer-logos">
        <img src={wheelsEmiLogo} alt="Wheels EMI" />
        <img src={sumaLogo} alt="SUMA" />
      </div>
      <div className="developer-name">
        Developed by Shrishail Bagale
      </div>
    </footer>
  );
};

export default Footer;
