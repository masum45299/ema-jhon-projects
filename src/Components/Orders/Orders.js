import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart'
import OrderedProduct from '../OrderedProduct/OrderedProduct';

const Orders = () => {
    const orders=useLoaderData()
    const {products,previousCart}=orders;
    const [cart,setCart]=useState(previousCart)

    const clearCart=()=>{
        setCart([])
        deleteShoppingCart()
    }

    const deleteCartProduct=(id)=>{
        const remaining=cart.filter(product=>product.id !==id);
        setCart(remaining)
        removeFromDb(id)

    }
    return (
        <div className='main-container'>
            <div className="OrderReview-container">
               {
                cart.map(product=> <OrderedProduct
                key={product.id}
                product={product}
                deleteCartProduct={deleteCartProduct}
                ></OrderedProduct>)
               }
            </div>
            <div className="order-container">
                <Cart clearCart={clearCart}  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;<h1>This is order page</h1>