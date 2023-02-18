import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to='/Product'><img src={logo} alt="Ema-jhon" /></Link>
            <div className='menu'>
                <Link to="/Product">Product</Link>
                <Link to="/Order">Order</Link>
                <Link to="/OrderReview">Order Review</Link>
                <Link to="/Inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;