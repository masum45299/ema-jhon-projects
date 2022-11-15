import React from 'react';

const Cart = (props) => {
    const {cart}=props
    return (
        <div>
            <h1>this is order</h1>
            <h5>Selected item : {cart.length}</h5>
        </div>
    );
};

export default Cart;