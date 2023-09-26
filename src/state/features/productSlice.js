// import { possibleStatus } from "../../config/possibleStatus";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: "a0047dfb9-c522-417d-ba4d-a733b717730b",
            name: "Leche 1 litro",
            price: "7000",
            stock: "20",
            category: "lacteos",
            uri: "https://web.superboom.net/web/image/product.template/36341/image_1024?unique=1df105c",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "f01355f6-0977-4b1d-85ef-14047eca4290",
            name: "Manzana Richard",
            price: "2000",
            stock: "50",
            category: "fruta",
            uri: "https://i5.walmartimages.ca/images/Large/062/0_r/6000191270620_R.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "bd0b4a95-2555-4c98-a6a6-4ab4a158eb6c",
            name: "Pera Packham",
            price: "1000",
            stock: "25",
            category: "fruta",
            uri: "https://image.vegaenlinea.cl/cache/data/productos/frutas/pera-packham-600x600.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "9bc4b638-397c-4f6e-823b-1b5f74b36e39",
            name: "Mascarpone",
            price: "23000",
            stock: "5",
            category: "lacteos",
            uri: "https://cavadequesos.com/280-superlarge_default/quescrem-mascarpone-x-250-gr.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "ee80f686-a0b2-4280-9215-b31d82870668",
            name: "Gouda",
            price: "22000",
            stock: "10",
            category: "lacteos",
            uri: "https://cavadequesos.com/257-superlarge_default/gouda-rueda-con-tomate-aceitunas-por-kilo.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "7e328a14-cb4b-4972-9f12-0eebda02cee2",
            name: "Jarlsberg ",
            price: "35000",
            stock: "5",
            category: "lacteos",
            uri: "https://cavadequesos.com/578-superlarge_default/jarlsberg-x-200g.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "eff3d930-8d5e-46d5-9de5-ac5793e89c86",
            name: "Naasdan",
            price: "17000",
            stock: "10",
            category: "lacteos",
            uri: "https://cavadequesos.com/579-superlarge_default/maasdam-holandes-x-200g.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "a91e31b5-7493-4fda-9885-bcde26f53037",
            name: "Naranja Valencia",
            price: "500",
            stock: "100",
            category: "fruta",
            uri: "https://mercalo.co/wp-content/uploads/2022/05/Naranja-valencia.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "9247db98-0517-4dd6-8652-363259f6fabb",
            name: "Mango Tommy",
            price: "2000",
            stock: "20",
            category: "fruta",
            uri: "https://lavaquita.co/cdn/shop/products/f25560ee-c1bc-45a2-96f6-d4b5959623de_700x700.png?v=1622197511",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "dbc79f9a-063d-4896-b512-124baa64d00a",
            name: "Mandarina Oneco",
            price: "400",
            stock: "50",
            category: "fruta",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/184470/Mandarina-oneco-x-05-kg.jpg?v=637015667191270000",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "d2dbb1e9-8ea4-4314-89fe-51895738e8af",
            name: "Coco",
            price: "5000",
            stock: "10",
            category: "fruta",
            uri: "https://www.specialfruit.com/es/thumbnail/productFull/product-1422864239/coco.jpg",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "972c28fb-640d-4b41-8195-8fe6c40ee380",
            name: "Helado 300g",
            price: "12000",
            stock: "30",
            category: "lacteos",
            uri: "https://jumbocolombiaio.vtexassets.com/arquivos/ids/196107/7702402053235-1.jpg?v=637814128104700000",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "2d287f86-d08b-4df7-ab6d-b6cf71f61e2e",
            name: "Pimentón rojo",
            price: "1500",
            stock: "25",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/230362-1200-auto?v=637840680008470000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "5266e5ff-a0e1-41fd-906d-9b2772107bc8",
            name: "Tomate cherry",
            price: "3500",
            stock: "10",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/217037-1200-auto?v=637571286365070000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "db1fe737-e729-4c36-a28f-eea117b71160",
            name: "Cilantro",
            price: "1500",
            stock: "10",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/230351-1200-auto?v=637840672415970000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "9a9bf44d-c16d-48aa-81a5-e4a4bf9f7e5b",
            name: "Zanahoria",
            price: "800",
            stock: "30",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/230361-1200-auto?v=637840679751170000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "73b9b529-3130-4ae7-a255-5461b17a105b",
            name: "Lechuga",
            price: "2700",
            stock: "25",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/184486-1200-auto?v=637015667253730000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "1256c695-4293-40b6-89f4-622a3733b5ec",
            name: "Cebolla Blanca",
            price: "1500",
            stock: "30",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/227571-1200-auto?v=637800074746900000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "7722aabc-b08f-4656-9e5d-5e82bf9347c5",
            name: "Ajo",
            price: "2500",
            stock: "10",
            category: "verdura",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/230356-1200-auto?v=637840675742830000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "2dffaa90-e30e-43df-afa0-17734112b21c",
            name: "Spaguetti",
            price: "2200",
            stock: "20",
            category: "pastas",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/1298606-1200-auto?v=638046516375930000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "f8222846-cf51-4208-b90d-98cfc553dde1",
            name: "Macarron",
            price: "2200",
            stock: "20",
            category: "pastas",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/1298867-1200-auto?v=638048052344070000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "3c3a66e0-815f-4df2-aa6d-842ffef40a10",
            name: "Tallarines",
            price: "900",
            stock: "10",
            category: "pastas",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/204212-1200-auto?v=637493353354470000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "3c3a66e0-815f-4df2-aa6d-842ffef40a10",
            name: "Lasaña",
            price: "7000",
            stock: "20",
            category: "pastas",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/1298869-1200-auto?v=638048052810830000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
        {
            id: "59a0fd6a-e79e-4b18-b128-f6f8c4089ec9",
            name: "Corbatas",
            price: "2200",
            stock: "30",
            category: "pastas",
            uri: "https://mercaldas.vtexassets.com/arquivos/ids/1298857-1200-auto?v=638048051758800000&width=1200&height=auto&aspect=true",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla blandit ex elit, nec aliquet leo finibus vitae. Etiam enim lectus, placerat nec tortor eu, ullamcorper vehicula elit.'
        },
    ],
    count: 24,
    selectedProduct: null,
    filteredProducts: [],	
    selectedCategory: null,
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
})

export default productSlice.reducer

export const selectProductsState = () => (state) => state.products.products
export const selectProductsStatus = () => (state) => state.products.status
export const selectProductsFetchError = () => (state) => state.products.error

export const { setSelectedProduct, addProduct, deleteProduct, editProduct, selectCategory} = productSlice.actions;