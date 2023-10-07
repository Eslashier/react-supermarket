import { possibleStatus } from "../../config/possibleStatus";
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../actions/users/get-products";
import { getProduct } from "../../actions/users/get-product";

const initialState = {
    products: [],
    selectedProduct: null,
    filteredProducts: [],	
    selectedCategory: null,
    status: possibleStatus.IDLE,
    error: null,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setSelectedProduct: (state, action) => {
            const selectedProduct = state.products.find(
                (product) => product.id === action.payload
            );
            state.selectedProduct = selectedProduct || null;
        },

        addProduct: (state, action) => {
            state.products.push(action.payload);
        },

        editProduct: (state, action) => {
            const updatedProduct = action.payload;
            const index = state.products.findIndex(
                (product) => product.id === updatedProduct.id
            );
            state.products[index] = updatedProduct;
        },
        deleteProduct: (state, action) => {
            const productId = action.payload;
            state.products = state.products.filter((product) => product.id !== productId);
        },
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
            state.filteredProducts = state.products.filter(
              (product) => product.category === action.payload
            );
            state.selectedCategory = action.payload;
          },
    },
    extraReducers: (builder) => {
        //GetProducts
        builder.addCase(getProducts.fulfilled, (state, payload) => {
            state.products = payload.payload.products
            state.status = possibleStatus.COMPLETED;
            state.error = null;
        })
        builder.addCase(getProducts.pending, (state) => {
            state.products = []
            state.status = possibleStatus.PENDING;
            state.error = null;
        })

        //GetProduct
        builder.addCase(getProduct.fulfilled, (state, payload) => {
            state.selectedProduct = payload.payload;
            state.status = possibleStatus.COMPLETED;
            state.error = null;
        })
        builder.addCase(getProduct.pending, (state) => {
            state.selectedProduct = null
            state.status = possibleStatus.PENDING;
            state.error = null;
        })
    }
})

export default productSlice.reducer

export const selectProductsState = () => (state) => state.products.products
export const selectProductsStatus = () => (state) => state.products.status
export const selectProductsFetchError = () => (state) => state.products.error

export const { setSelectedProduct, addProduct, deleteProduct, editProduct, selectCategory} = productSlice.actions;