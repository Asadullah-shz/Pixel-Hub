import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';
import free_shipping from '../Assets/free_shipping.png';
import easy_return from '../Assets/easy_return.png';
import secure_payments from '../Assets/secure_payment.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image_2.png';

const Hero = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    navigate('/womens');
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Welcome to Our Store</h2>
        <h1>Discover New Collections</h1>
        <p>Explore the latest trends designed for everyone.</p>
        <div className="hero-buttons">
          <button className="cta-primary" onClick={handleShopNow}>
            Shop Now
          </button>
          <button className="cta-secondary">
            Learn More <img src={arrow_icon} alt="arrow icon" />
          </button>
        </div>
        <div className="hero-features">
          <div className="feature">
            <img src={free_shipping} alt="feature icon" />
            <p>Free Shipping</p>
          </div>
          <div className="feature">
            <img src={easy_return} alt="feature icon" />
            <p>Easy Returns</p>
          </div>
          <div className="feature">
            <img src={secure_payments} alt="feature icon" />
            <p>Secure Payment</p>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
