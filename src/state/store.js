import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import productSlice from "./features/productSlice";

export const store = configureStore({
    reducer: {
        products: productSlice,
    }
})

export const useAppDispatch = () => useDispatch()