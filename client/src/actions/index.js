export const displayAvailableItems=()=>{
    return{
        type:'DISPLAY_AVAILABLE_ITEMS'
    }
}

export const addProductToCart=(Item)=>{
    return{
        type:'ADD_TO_CART',
        payload:Item
    }
}

export const incrementProductInCart=(Item)=>{
    return{
        type:'INCREMENT_PRODUCT_IN_CART',
        payload:Item
    }
}

export const decrementProductInCart=(Item)=>{
    return{
        type:'DECREMENT_PRODUCT_IN_CART',
        payload:Item
    }
}
export const clearCart =()=>{
    return {
        type:'ClearCart'
    }
}