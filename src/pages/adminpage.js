import React from 'react';

import ProductListing from '../features/product-listing';
import data from '../data/products.json';

export default function AdminPage(props) {
    return <div>
        <h2>Admin page</h2>
        <ProductListing products={data.products} />
    </div>
};