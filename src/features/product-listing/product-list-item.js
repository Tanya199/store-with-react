import React from 'react';

import AddBtn from './add-btn';
import RemoveBtn from './remove-btn';
import '../../styles/product-list-item.css';

export default function ProductListItem(props) {
    return <div className="ProductListItem">
        <div className="ProductListItem-box1">
            <img
                className="ProductListItem-img"
                height={200}
                src={`/products/${props.product.image}`}
                alt="phone"
            />
        </div>
        <div className="ProductListItem-box2">
            <h2>{props.product.name}</h2>
            <h3>${props.product.price}</h3>
            <p>{props.product.code}</p>
            <p>{props.product.available}</p>
            <p>{props.product.description}</p>
            <AddBtn 
                cartItem={props.cartItem} 
                product={props.product}
                addToCart={props.addToCart}
            />
            {
            props.cartItem
               ? <RemoveBtn 
                    cartItem={props.cartItem} 
                    product={props.product}
                    removeFromCart={props.removeFromCart}
                />
                : null
            }
        </div>
    </div>
};