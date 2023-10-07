import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../config/urlConfig";


const updateProductUrl = urlApi + "/products";

export const postProduct = createAsyncThunk('postProduct', async (payload) => {
    let url = `${updateProductUrl}`
    const response = await fetch(url, {
        method: 'POST', headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    return await response.json();
})