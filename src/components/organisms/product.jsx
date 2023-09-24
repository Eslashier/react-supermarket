import { Link } from "react-router-dom";
import AddButton from "../atoms/add-button";
import "./product-styles.css";

const Product = (product) => {
  const { id, name, price, uri } = product.data;
  const redirect = `../product/${id}`;
  return (
    <>
      <div key={id} className="product-item">
        <Link to={redirect}>
          <img src={uri} className="product-image" alt="image" />
        </Link>
        <div className="info">
          <h3 className="product-name">{name}</h3>
          <h3 className="product-price">${price}</h3>
          <AddButton text={"Agregar"} />
        </div>
      </div>
    </>
  );
};

export default Product;
