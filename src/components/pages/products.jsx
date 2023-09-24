import Product from "../organisms/product";
import "./products-styles.css";
import { useSelector } from "react-redux";


const Products = () => {

  const inventory = useSelector((state) => state.products.products);

  return (
    <>
      <div className="body">
        <div className="products">
          {inventory.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
