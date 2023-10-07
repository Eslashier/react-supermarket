import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../config/urlConfig";


const updateProductUrl = urlApi + "/products";

export const updateProduct = createAsyncThunk('updateProduct', async (payload) => {
    const { id, ...toUpdate } = payload;
    let url = `${updateProductUrl}/${id}`
    const response = await fetch(url, {
        method: 'PATCH', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(toUpdate)
    });
    return await response.json();
})