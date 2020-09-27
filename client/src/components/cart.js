import React from 'react';
import { incrementProductInCart,decrementProductInCart,removeProductFromCart,clearCart } from '../actions';
import {useSelector,useDispatch}from 'react-redux';
import Product from './product';
import cartItems from '../reducers/cartItems';
 function Cart() {
    var ItemsInCart =  useSelector(state => state.ItemsInCart)
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Cart</h1>
            {ItemsInCart.map((Item,Index)=>(
                <div key={Index} className="cart_item">
                    <Product Name={Item.Name} Price={Item.Price}/>
                    <h2>Qty:{Item.Qty}</h2>
                    <h3>Amount:{Item.Price*Item.Qty}</h3>
                    <button onClick={()=>{dispatch(incrementProductInCart(Item))}}>+</button>
                    <button onClick={()=>{dispatch(decrementProductInCart(Item))}}>-</button>
                    <button onClick={()=>{dispatch(removeProductFromCart(Item))}}>Remove</button>
                </div>
            ))}

    <button onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
        </div>
    );
}
 const memoOfCartItems = React.memo(Cart);
 export default memoOfCartItems;