// ProductionLinks.js
import React from 'react';
import './ProductionLinks.css';

const ProductionLinks = () => {
  return (
    <div className="production-links">
      <div className="card">
        <h3 highlighted>Salesforce Link</h3>
        <a href="https://wheelsltd.my.salesforce.com" target='_blank'>https://wheelsltd.my.salesforce.com</a>
      </div>
      {/* <div className="card">
        <h3>NGUCC Login</h3>
        <a href="https://192.168.3.253:8475" target='_blank'>https://192.168.3.253:8475</a>
      </div>
      <div className="card">
        <h3>SOPHOS Link</h3>
        <a href="https://192.168.202.6:8090/httpclient.html" target='_blank'>https://192.168.202.6:8090/httpclient.html</a>
      </div> */}
    </div>
  );
};

export default ProductionLinks;
