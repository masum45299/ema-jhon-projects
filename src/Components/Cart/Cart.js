import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props
    return (
        <div className='order-main'>
            <p className='order-summary'>Order Summary</p>
            <div className='order-info'>
            <h5>Selected item : {cart.length}</h5>
            </div>
        </div>
    );
};

export default Cart;