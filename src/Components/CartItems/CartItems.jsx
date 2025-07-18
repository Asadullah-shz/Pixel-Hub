import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const handleAddQuantity = (id) => {
        updateCartItemCount(id, cartItems[id] + 1);
    };
    
    const handleSubtractQuantity = (id) => {
        if (cartItems[id] > 1) {
            updateCartItemCount(id, cartItems[id] - 1);
        } else {
            removeFromCart(id);
        }
    };

    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.length === 0 ? (
                <p>No products available</p>
            ) : (
                all_product.map((e) => {
                    if (cartItems[e.id] > 0) {
                        return (
                            <div key={e.id}>
                                <div className="cartitems-format cartitems-format-main">
                                    <img src={e.image} alt="" className="carticon-product-icon" />
                                    <p>{e.name}</p>
                                    <p>${e.new_price}</p>
                                    <div className="cartitems-quantity-wrapper">
                                        <button onClick={() => handleSubtractQuantity(e.id)}>-</button>
                                        <span className="cartitems-quantity">{cartItems[e.id]}</span>
                                        <button onClick={() => handleAddQuantity(e.id)}>+</button>
                                    </div>
                                    <p>${e.new_price * cartItems[e.id]}</p>
                                    <img
                                        src={remove_icon}
                                        onClick={() => removeFromCart(e.id)}
                                        alt="Remove"
                                        className="carticon-remove-icon"
                                    />
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })
            )}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Sub Total: </p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Free</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total: </h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
