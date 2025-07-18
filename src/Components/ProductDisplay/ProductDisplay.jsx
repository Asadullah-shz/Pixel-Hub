import React, { useContext } from "react";
import "./ProductDisplay.css";
import start_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-main-img">
        <img src={product.image} alt="Product" />
      </div>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
          <img src={product.image} alt="Product" />
        </div>
      </div>

      <div className="productdisplay-right">
        <h1>{product.name}</h1>

        <div className="productdisplay-right-star">
          <img src={start_icon} alt="Star" />
          <img src={start_icon} alt="Star" />
          <img src={start_icon} alt="Star" />
          <img src={start_icon} alt="Star" />
          <img src={star_dull_icon} alt="Star" />
          <p>(15 Reviews)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            PKR{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            PKR{product.new_price}
          </div>
        </div>

        <div className="productdisplay-right-description">
          <p>{product.description}</p>
        </div>

       

        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Add to Cart
        </button>

        <p className="productdisplay-right-category">
          <span>Category: {product.category}</span>
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
