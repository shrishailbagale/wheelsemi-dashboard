// Notice.js
import React from 'react';
import './Notice.css';

const Notice = ({ text }) => {
  return (
    <div className="notice-container">
      <div className="marquee">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Notice;
