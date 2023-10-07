import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../config/urlConfig";


const deleteProductUrl = urlApi + "/products";

export const deleteProduct = createAsyncThunk('deleteProduct', async (payload) => {
    const { id } = payload;
    let url = `${deleteProductUrl}/${id}`
    await fetch(url, {
        method: 'DELETE', headers: {
            'Content-Type': 'application/json'
        },
    }).catch(() => {throw new Error('Error al borrar produdcto')});
    return id;
})