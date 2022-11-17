import {createAsyncThunk , createSlice} from "@reduxjs/toolkit"
import axios from "axios"

export const product =createAsyncThunk("productSlice/fetch",async()=>{
    const res =await axios.get("https://fakestoreapi.com/products");
    return res.data;
}) 

const productSlice =createSlice({
    name:"products",
    initialState:{
        products:[],
        loading:false,
    },
    reducers:{

    },

    extraReducers:{
        [product.pending]:(state)=>{
            state.loading=true
        },

        [product.fulfilled]:(state,action)=>{
            state.loading=false
            state.products=action.payload
        },
        [product.rejected]:(state,action)=>{
            state.products=action.payload
        }
    }
})
export const {} =productSlice.actions;
export default productSlice.reducer;