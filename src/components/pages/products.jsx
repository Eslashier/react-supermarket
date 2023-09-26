import Product from "../organisms/product";
import "./products-styles.css";
import { useSelector } from "react-redux";


const Products = () => {

  const inventory = useSelector((state) => state.products.products);
  const items = inventory.slice(0,20)

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
