import { configureStore } from "@reduxjs/toolkit";
import Shopreducer from "./slices/Shopslice";

export const store = configureStore({
    reducer:{
        shopslice:Shopreducer,
    }
})
