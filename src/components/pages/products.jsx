import Product from "../organisms/product";
import "./products-styles.css";
import { useSelector } from "react-redux";

const Products = () => {
  const inventory = useSelector((state) => state.products.products);
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

export default Products;
