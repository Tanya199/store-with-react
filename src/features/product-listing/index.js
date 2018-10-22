import React from 'react';
import { connect } from 'react-redux';

import ProductListItem from './product-list-item';
import '../../styles/product-list-item.css';

function ProductListing(props) {
    return <div>
        {
            props.products.map((product, index) => 
                <ProductListItem 
                    key={index} 
                    product={product}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFormCart}
                    cartItem={props.cart.filter(cartItem => cartItem.id === product.id)[0]}
                />
            )
        }
    </div>
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
};

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFormCart: (item) => {
            dispatch({ type: 'REMOVE', payload: item})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);