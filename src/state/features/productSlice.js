// import { possibleStatus } from "../../config/possibleStatus";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "an-id",
            name: "Leche",
            price: "7000",
            stock: "20",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "an-id2",
            name: "Leche",
            price: "7000",
            stock: "30",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "an-id3",
            name: "Leche",
            price: "7000",
            stock: "20",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "an-id4",
            name: "Leche",
            price: "7000",
            stock: "30",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "an-id5",
            name: "Leche",
            price: "7000",
            stock: "20",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "an-id6",
            name: "Leche",
            price: "7000",
            stock: "30",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
    ],
    selectedProduct: null,
    // status: possibleStatus.COMPLETED,
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
        }
    },
})

export default productSlice.reducer

export const selectProductsState = () => (state) => state.products.products
export const selectProductsStatus = () => (state) => state.products.status
export const selectProductsFetchError = () => (state) => state.products.error

export const { setSelectedProduct } = productSlice.actions;