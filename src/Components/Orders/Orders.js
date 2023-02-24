import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart'
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
    const orders=useLoaderData()
    const {products,previousCart}=orders;
    const [cart,setCart]=useState(previousCart)
    return (
        <div className='main-container'>
            <div className="OrderReview-container">
               {
                cart.map(product=> <OrderedProduct
                key={product.id}
                product={product}
                ></OrderedProduct>)
               }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;<h1>This is order page</h1>