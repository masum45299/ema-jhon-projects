import React, { useEffect, useState } from 'react';
import {addToDb} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Product.css'

const Product = () => {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const [cart,setCart]=useState([])

    const handlerToCart=(product)=>{
        const newCart=[...cart,product];
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='main-container'>
            <div className="product-container">
                {
                    products.map(product=>
                    <Shop product={product}
                    key={product.id} 
                    handler={handlerToCart}></Shop>)
                }
            </div>
            <div className="order-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Product;