import React from 'react';
import './Footer.css';
import wheelsEmiLogo from '../assets/wheels-emi-logo.gif'; // Replace with your actual path
import sumaLogo from '../assets/bblogo.png'; // Replace with your actual path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2 className="company-title">Wheelsemi Pvt Ltd</h2>
          <div className="footer-logos">
            <img src={wheelsEmiLogo} alt="Wheels EMI" />
            <img src={sumaLogo} alt="SUMA" />
          </div>          
        </div>
        <div className="footer-links">
          <h3>Production Links:</h3>
          <ul>
            <li>Salesforce Link: <a href="https://wheelsltd.my.salesforce.com">https://wheelsltd.my.salesforce.com</a></li>
            <li>NGUCC login: <a href="https://192.168.3.253:8475">https://192.168.3.253:8475</a></li>
            <li>SOPHOS Link: <a href="https://192.168.202.6:8090/httpclient.html">https://192.168.202.6:8090/httpclient.html</a></li>
          </ul>
        </div>
        
      </div>

      <footer>
      <div className="developer-name">
            Developed by <a href="https://linkedin.com/in/shrishailbagale" target="_blank">Shrishail Bagale</a>
          </div>
      </footer>
      
      
    </footer>
  );
};

export default Footer;
