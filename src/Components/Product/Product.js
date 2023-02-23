import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Shop from '../Shop/Shop';
import './Product.css'

const Product = () => {
    const products= useLoaderData()
    const [cart, setCart] = useState([])


    useEffect(() => {
        const storeCart = getStoredCart()
        const saveCart = [];
        for (const id in storeCart) {
            const addProduct = products.find(product => product.id === id)
            if (addProduct) {
                const quantity = storeCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const handlerToCart = (selectedProduct) => {
        console.log(selectedProduct)
        // const newCart = [...cart, selectedProduct];
        let newCart=[];
        
        const exists=cart.find(product=>product.id===selectedProduct.id);
        if(!exists){
            selectedProduct.quantity=1
            newCart = [...cart, selectedProduct];
        }
        else{
            const rest=cart.filter(product=>product.id!==selectedProduct.id)
            exists.quantity=exists.quantity + 1;
            newCart=[...rest, exists]
        }
        

        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='main-container'>
            <div className="product-container">
                {
                    products.map(product =>
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