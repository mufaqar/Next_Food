import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
// const da = localStorage.getItem("cartItems");

const initialState = {
  cart: []
}

export const addtocart = createSlice({
  name: 'addtocart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      state.cart.push(action.payload);
      toast.info("Product Add to Cart", {
        position: "bottom-left",
      });
    },
    removefromcart: (state, action) => {

      const nextCartItem = state.cart.filter(cartItem => cartItem.id !== action.payload.id);
      state.cart = nextCartItem;
      toast.warn("Delete From Cart", {
        position: "bottom-left",
      });
    },
    deleteAll: (state) => {
      state.cart = [];
      toast.error("Delete All", {
        position: "bottom-left",
      });
    },
    increasecartitem: (state, action) =>{
      state.cart[action.payload].quantity++;  
    },
    decrementcartitem: (state, action) =>{
      state.cart[action.payload].quantity--;  
    },
  },
})

// Action creators are generated for each case reducer function
export const { addCart,removefromcart,deleteAll,decrementcartitem,increasecartitem } = addtocart.actions

export default addtocart.reducer