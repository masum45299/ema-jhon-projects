import React from 'react';
import './OrderedProduct.css';
import { faTrashAlt  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const OrderedProduct = ({product,deleteCartProduct}) => {
    const {img,name,price,quantity,shipping,id}=product
    return (
        <div className='orderReview-item'>
            <div>
                <img src={img}/>
            </div>
            <div className='reviewDetails-container'>
                <div className='reviewDetails'>
                    <p><small>Name : {name}</small></p>
                    <p><small>Price : {price}</small></p>
                    <p><small>Shipping : {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className='reviewButton'>
                    <button onClick={()=> deleteCartProduct(id)} className='btn-delete'>
                    <FontAwesomeIcon className='fontAwesome' icon={faTrashAlt } />
                    </button>
                    
                </div>

            </div>
        </div>
    );
};

export default OrderedProduct;