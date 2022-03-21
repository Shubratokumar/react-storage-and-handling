import React from 'react';
import { addToDb, deleteShoppingCart, removeFromDb } from '../../utilities/localStorage';
import './Cosmetic.css'

const Cosmetic = (props) => {
    const {name, price,_id} = props.cosmetic;
    const addToCart = (_id) =>{
        addToDb(_id)
    }
    const removeFromCart = (_id) =>{
        removeFromDb(_id)
    }
    // const addToCartWithParam = () => addToCart(_id)
    return (
        <div className ='product'>
            <h3>Product name : {name}</h3>
            <p>Price : {price}$</p>
            <p>Product ID : {_id}</p>
            {/* <button onClick = {addToCartWithParam}>Add to Cart</button> <br /> <br /> */}
            <button onClick = {() => addToCart(_id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(_id)}>Remove</button>
            <button onClick={deleteShoppingCart}>Delete Shopping Cart</button>
        </div>
    );
};

export default Cosmetic;