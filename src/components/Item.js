import React from 'react';
import './Item.css';

const Item = ({ text, highlighted }) => (
  <div className={`item ${highlighted ? 'highlighted' : ''}`}>
    {text}
  </div>
);

export default Item;
