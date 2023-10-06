import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux'
import productSlice from "./features/productSlice";
import loginSLice from "./features/loginSLice";

export const store = configureStore({
    reducer: {
        products: productSlice,
        login: loginSLice,
    }
})

export const useAppDispatch = () => useDispatch()