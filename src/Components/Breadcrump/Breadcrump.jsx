import React from 'react';
import './Breadcrump.css';
import arrow_icon from '../Assets/breadcrum_arrow.png';

const Breadcrump = (props) => {
  const { product } = props;
  return (
    <div className="breadcrump">
      HOME <img src={arrow_icon} alt="Arrow Icon" /> SHOP <img src={arrow_icon} alt="Arrow Icon" /> {product.category} <img src={arrow_icon} alt="Arrow Icon" /> {product.name}
    </div>
  );
};

export default Breadcrump;
