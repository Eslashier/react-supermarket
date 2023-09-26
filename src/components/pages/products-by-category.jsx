import { useLocation } from "react-router-dom";
import Product from "../organisms/product";
import "./products-styles.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory } from "../../state/features/productSlice";

const ProductsByCategory = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const category = location.split("/").pop();

  dispatch(selectCategory(category));

  const inventory = useSelector((state) => state.products.filteredProducts);
  const items = inventory.slice(0, 20);

  if (inventory.length === 0)
    return (
      <div className="body">
        <h1>No se han encontrado productos</h1>
      </div>
    );

  return (
    <>
      <div className="body">
        <div className="products">
          {items.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductsByCategory;
