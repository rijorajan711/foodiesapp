import { createSlice } from "@reduxjs/toolkit";

export const  cardFetchDataSlice = createSlice({
  name: "card",
  initialState:{
    items:[]
  },
  reducers: {
    addItem: (state, action) =>{
      
      state.items.push(action.payload);
      console.log("kavalayya",state)
      
    },
    clearItems:(state,action)=>{
      state.items=[]
    }
  },
  
});
export default cardFetchDataSlice.reducer;
export const { addItem,clearItems } = cardFetchDataSlice.actions;
