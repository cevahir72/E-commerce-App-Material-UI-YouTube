import { createSlice } from '@reduxjs/toolkit';
import {toast} from "react-toastify";


const initialState = {
    cartItems: localStorage.getItem("cartItems" ) ? JSON.parse(localStorage.getItem("cartItems")): [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        
       addToCart(state, action) {

        const itemIndex = state.cartItems.findIndex(item=> item.id === action.payload.id);
        if(itemIndex >= 0){ 
            state.cartItems[itemIndex].cartQuantity +=1
            toast.info(`increased items quantity `, {
                position:"bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress: undefined,
            });
        }else{
            const tempProducts = {...action.payload, cartQuantity:1}
            state.cartItems.push(tempProducts);
            toast.info(`Added to the cart `, {
              position:"bottom-left",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick:true,
              pauseOnHover:true,
              draggable:true,
              progress: undefined,
          });
        }
        localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
        
       },
       reduceCard(state,action){
          const currentCart = state.cartItems.find(item=> item.id === action.payload.id);
          currentCart.cartQuantity -=1
          let cartWithoutCurrent = state.cartItems.filter(item=> item.id !== action.payload.id);
          if(currentCart.cartQuantity === 0){
            
            state.cartItems = [...cartWithoutCurrent] 
          }else{
            state.cartItems = [...cartWithoutCurrent, currentCart]
          }
          localStorage.setItem("cartItems",JSON.stringify(state.cartItems));

       },
       getTotals(state,action){
        let { total, quantity } = state.cartItems.reduce(
            (cartTotal, cartItem) => {
              const { price, cartQuantity } = cartItem;
              const itemTotal = price * cartQuantity;
    
              cartTotal.total += itemTotal;
              cartTotal.quantity += cartQuantity;
    
              return cartTotal;
            },
            {
              total: 0,
              quantity: 0,
            }
          );

        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;

       },

       resetCart(state, action) {
        state.cartItems = [];
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        toast.error(`Cart cleared `, {
          position:"bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick:true,
          pauseOnHover:true,
          draggable:true,
          progress: undefined,
      });
       },

       removeItem(state, action) {
        state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              const nextCartItems = state.cartItems.filter(
                (item) => item.id !== cartItem.id
              );
    
              state.cartItems = nextCartItems;
    
              toast.error(`Product removed from the cart `, {
                position:"bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:true,
                progress: undefined,
            });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state;
          });
         
         
       }

    }
})

export const { addToCart, getTotals, resetCart, removeItem, reduceCard} = cartSlice.actions

export default cartSlice.reducer