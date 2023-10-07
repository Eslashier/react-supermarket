import { createAsyncThunk } from "@reduxjs/toolkit";
import { urlApi } from "../../config/urlConfig";


const getProductsUrl = urlApi + "/products";

export const getProducts = createAsyncThunk('getProducts', async (payload) => {
    const { page, category } = payload ?? {};
    let url = `${getProductsUrl}`
    if(page) url = `${url}?_limit=20&_page=${page}`;
    if(category) url = `${url}&category=${category}`;
    const  response = await fetch(url)
    const count = response.headers.get('x-total-count')
    const products = await response.json();
    return {count, products};
})