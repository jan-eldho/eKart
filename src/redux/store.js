import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./whishlistSlice";
import cartSlice from "./cartSlice";

const store= configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartSlice

    }
})

export default store;