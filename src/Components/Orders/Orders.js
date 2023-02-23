import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const orders=useLoaderData()
    const {products,previousCart}=orders;
    const [cart,setCart]=useState(previousCart)
    return (
        <div>
            <h1>This is order page {products.length}</h1>
            <h4>This is previousCart : {cart.length}</h4>
        </div>
    );
};

export default Orders;<h1>This is order page</h1>