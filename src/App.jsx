import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/layout";
import Home from "./components/pages/home";
import Inventory from "./components/pages/inventory";
import AddItem from "./components/pages/add-item";

import "./styles/colors.css";
import Products from "./components/pages/products";
import Categories from "./components/pages/categories";
import NoPage from "./components/pages/no-page";
import Login from "./components/pages/login";
import LayoutAdmin from "./components/pages/layout admin";
import ProductDetail from "./components/pages/products-detail";
import EditItem from "./components/pages/edit-item";
import ProductsByCategory from "./components/pages/products-by-category";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/:category" element={<ProductsByCategory />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/admin/" element={<LayoutAdmin />}>
          <Route path="inventory" element={<Inventory />} />
          <Route path="inventory/edit/:id" element={<EditItem />} />
          <Route path="add-item" element={<AddItem />} />
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
