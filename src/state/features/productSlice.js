import { possibleStatus } from "../../config/possibleStatus";
import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../../actions/users/get-products";
import { getProduct } from "../../actions/users/get-product";
import { updateProduct } from "../../actions/users/update-product";
import { deleteProduct } from "../../actions/users/delete-product";
import { postProduct } from "../../actions/users/add-product";

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

        // UpdateProduct
        builder.addCase(updateProduct.fulfilled, (state, payload) => {
            const updatedProduct = payload.payload;
            const index = state.products.findIndex(
                (product) => product.id === updatedProduct.id
            );
            state.products[index] = updatedProduct;
            state.status = possibleStatus.COMPLETED;
            state.error = null;
        })
        builder.addCase(updateProduct.pending, (state) => {
            state.selectedProduct = null
            state.status = possibleStatus.PENDING;
            state.error = null;
        })

        // DeleteProduct
        builder.addCase(deleteProduct.fulfilled, (state, payload) => {
            const productId = payload.payload;
            state.products = state.products.filter((product) => product.id !== productId);
            state.status = possibleStatus.COMPLETED;
            state.error = null;
        })
        builder.addCase(deleteProduct.pending, (state) => {
            state.selectedProduct = null
            state.status = possibleStatus.PENDING;
            state.error = null;
        })
        builder.addCase(deleteProduct.rejected, (state) => {
            state.selectedProduct = null
            state.status = possibleStatus.PENDING;
            state.error = 'Error al borrar producto';
        })

        // AddProduct
        builder.addCase(postProduct.fulfilled, (state, payload) => {
            state.products.push(payload.payload);
            state.status = possibleStatus.COMPLETED;
            state.error = null;
        })
        builder.addCase(postProduct.pending, (state) => {
            state.selectedProduct = null
            state.status = possibleStatus.PENDING;
            state.error = null;
        })
        builder.addCase(postProduct.rejected, (state) => {
            state.selectedProduct = null
            state.status = possibleStatus.PENDING;
            state.error = 'Error al crear producto';
        })
    }
})

export default productSlice.reducer

export const selectProductsState = () => (state) => state.products.products
export const selectProductsStatus = () => (state) => state.products.status
export const selectProductsFetchError = () => (state) => state.products.error

export const { setSelectedProduct, editProduct, selectCategory } = productSlice.actions;