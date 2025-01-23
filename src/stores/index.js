import {configureStore}from "@reduxjs/toolkit";
import cartReducer from "./cart.js"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // user: ...
  }
})