import cardFetchDataSlice from "./cardSlice"
import cartSlice from "./cartSlice"
import { configureStore } from "@reduxjs/toolkit"

const  store=configureStore({
    reducer:{
           card:cardFetchDataSlice,
           cart:cartSlice
    }
})

export default store