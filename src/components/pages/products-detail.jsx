import "./products-detail-styles.css";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../../state/features/productSlice";
import AddButton from "../atoms/add-button";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const productId = location.split("/").pop();

  dispatch(setSelectedProduct(productId));

  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  if (!selectedProduct) {
    return <div>Producto no encontrado.</div>;
  }

  const { id, uri, price, description, stock, name } = selectedProduct;

  return (
    <>
      <div className="body">
        <div key={id} className="product-detail">
          <h1 className="product-name-title">{name}</h1>
          <div className="product-information">
            <img src={uri} className="product-detail-image" alt="image" />
            <div className="info-detail">
              <h2 className="product-detail-text">
                <strong>$ {price}</strong>
              </h2>
              <h2 className="product-detail-text">
                <strong>Cantidad existete: </strong>
                {stock} uds
              </h2>
              <h2 className="product-detail-text">
                <strong>Descripción: </strong>
                {description}
              </h2>
              <AddButton text={"Agregar"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
