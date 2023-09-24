import AddButton from "../atoms/add-button";
import "./product-styles.css";

const Product = (product) => {
  const { id, name, price, uri } = product.data;
  return (
    <>
      <div key={id} className="product-item">
        <img src={uri} className="product-image" alt="image" />
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
