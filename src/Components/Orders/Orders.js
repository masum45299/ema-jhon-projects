import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const orders=useLoaderData()
    const {products,previousCart}=orders;
    console.log(orders)
    return (
        <div>
            <h1>This is order page {products.length}</h1>
            <h4>This is previousCart : {previousCart.length}</h4>
        </div>
    );
};

export default Orders;<h1>This is order page</h1>