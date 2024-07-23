// Item.js
import React from 'react';
import './Item.css';

const Item = ({ text, highlighted, link }) => {
  return (
    <li className={`item ${highlighted ? 'highlighted' : ''}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    </li>
  );
};

export default Item;
