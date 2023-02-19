import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const orders=useLoaderData()
    return (
        <div>
            <h1>This is order page {orders.length}</h1>
        </div>
    );
};

export default Orders;<h1>This is order page</h1>