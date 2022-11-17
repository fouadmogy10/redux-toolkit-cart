import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        const findprod =state.find(prod=>prod.id ==action.payload.id);
        if(findprod){
            findprod.QTY+=1;
        }else{
            const prodClone ={...action.payload,QTY:1}
            state.push(prodClone);
        }
    },
    ClearCart: (state, action) => {
       return []
    },
    deleteFromCart: (state, action) => {
        return state.filter(cartItem=>cartItem.id !== 
            action.payload.id )
    },
  },
});
export const { addToCart, ClearCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
