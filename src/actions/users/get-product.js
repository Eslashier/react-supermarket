import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../config/urlConfig";


const getProductsUrl = urlApi + "/products";

export const getProduct = createAsyncThunk('getProduct', async (payload) => {
    const { id } = payload;
    let url = `${getProductsUrl}/${id}`
    const response = await fetch(url);
    return await response.json();
})