import { createSlice } from "@reduxjs/toolkit";

export const Shopslice = createSlice({
    name : "shopslice",
    initialState :[],
    reducers: {
        AddToCart: (state,action) =>{
            state.push(action.payload);
        },
        RemoveToCart: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        }
        
    }
})

export const {AddToCart,RemoveToCart} = Shopslice.actions;
export default Shopslice.reducer;