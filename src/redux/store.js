import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "../redux/cartSlice";
import userReducer from "../redux/userSlice";

export const store = configureStore({
    reducer: {
      cart: cartReducer,
      user: userReducer,
    },
  })