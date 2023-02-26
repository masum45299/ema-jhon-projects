import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart,clearCart}=props

    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){
        total= total+ product.price*product.quantity;
        shipping=shipping +product.shipping;
        quantity=quantity+product.quantity;
    }
    
    const taxDecimal=total*0.1;
    const   stringTax=taxDecimal.toFixed(2)
    const   tax=parseFloat(stringTax);

    const grandfinal=total+shipping+tax;
    return (
        <div className='order-main'>
            <p className='order-summary'>Order Summary</p>
            <div className='order-info'>
            <p>Selected item : {quantity}</p>
            <p>Total Price: {total}  </p>
            <p>Total Shipping Charge: {shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandfinal}</h5>
            <button onClick={()=>clearCart()}>Clear Cart</button>
            </div>
        </div>
    );
};

export default Cart;