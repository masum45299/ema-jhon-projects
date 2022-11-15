import React from 'react';
import './Shop.css'

const Shop = (props) => {
 
    const {handler,product}=props
    const {img,name,price,seller,ratings}=product
    return (
        <div className='product-box'>
            <img className='product-img' src={img} alt="" />
            <div className='product-info'>
                <p className='name'>{name}</p>
                <p className='price'>Price: ${price}</p>
                <p className='manufacturer'>Manufacturer : {seller}</p>
                <p className='rating'>Rating : {ratings}</p>
            </div>
            <button onClick={()=>handler(props.product)} className='btn'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Shop;