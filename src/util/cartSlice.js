import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart:(state,action)=>{
            console.log("action.payload",action.payload)
              state.items.push(action.payload)
              console.log("chaaaho",state.items)
        }
    }

});


export default cartSlice.reducer;
export const {addToCart} =cartSlice.actions


