var cart=[];
var productsInCart=[];
const cartItems = (state=cart,action)=>{
    
        switch (action.type) {
            case 'ADD_TO_CART':
                if(action.payload !==null || undefined){
                    if(productsInCart.includes(action.payload.Item.Name)){

                    }
                    else{
                        productsInCart[productsInCart.length] = action.payload.Item.Name;
                        action.payload.Item.Qty = 1;
                        cart[cart.length]=action.payload.Item;
                        state= cart;
                    }
                    return state;
                }
                break;
            case 'INCREMENT_PRODUCT_IN_CART':
                for(let i=0;i<cart.length;i++){
                    if(cart[i].Name === action.payload.Item.Name)
                    {
                        cart[i].Qty = cart[i].Qty+1;
                        state = cart;
                    }
                }
                return state;
                break;
            case 'DECREMENT_PRODUCT_IN_CART':
                for(let i=0;i<cart.length;i++){
                    if(cart[i].Name === action.payload.Item.Name&&cart[i].Qty!==1)
                    {
                        cart[i].Qty = cart[i].Qty-1;
                        state = cart;
                    }
                }
                break;
            case 'REMOVE_PRODUCT_FROM_CART':
                for(let i=0;i<cart.length;i++){
                if(cart[i].Name === action.payload.Item.Name)
                    {
                        cart.splice(i);
                        state = cart;
                    }
                }
                return state;
                break;
            case 'CLEAR_CART':
                cart = [];
                state = cart;
                return state;
            break;
        
            default:
                return state;
                break;
        }
    
};
