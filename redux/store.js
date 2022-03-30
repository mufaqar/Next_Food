import { configureStore } from '@reduxjs/toolkit'
import addtocart from './slice/addtocart'


export const store = configureStore({
  reducer: {
    cart: addtocart,
  },
})