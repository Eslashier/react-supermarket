import { useDispatch, useSelector } from "react-redux";
import "./add-item-styles.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProduct } from "../../actions/users/get-product";
import { updateProduct } from "../../actions/users/update-product";

const EditItem = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const productId = location.split("/").pop();
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);
  const [url, setUrl] = useState('');
  const [description, setDescription] = useState('');
  const selectedProduct = useSelector(
    (state) => state.products.selectedProduct
  );

  useEffect(() => {
    dispatch(getProduct({ id: productId }));
    setName(selectedProduct?.name);
    setPrice(selectedProduct?.price);
    setStock(selectedProduct?.stock);
    setUrl(selectedProduct?.uri);
    setDescription(selectedProduct?.description);
  }, [dispatch, location]);



  let navigate = useNavigate();

  const onEdit = (e) => {
    e.preventDefault();

    if (name && description && url && +price > 0 && +stock >= 0) {
      const productToEdit = {
        id: selectedProduct.id,
        name: name,
        price: price,
        stock: stock,
        uri: url,
        description: description,
      };
      dispatch(updateProduct(productToEdit));
      navigate("../inventory");
    } else {
      alert(
        "All the fields must be provided, maximum stock must be greater than minimum stock and values must be greater than zero"
      );
    }
  };

  if (!selectedProduct) {
    return <div>Producto no encontrado.</div>;
  }

  return (
    <>
      <div className="body">
        <form onSubmit={(e) => onEdit(e)}>
          <div>
            <label className="product-tag">Nombre:</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="input-add"
            placeholder="Nombre del producto"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <label className="product-tag">Precio:</label>
          </div>
          <input
            type="text"
            id="price"
            name="price"
            className="input-add"
            placeholder="Precio del producto"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>
            <label className="product-tag">Stock:</label>
          </div>
          <input
            type="text"
            id="stock"
            name="stock"
            className="input-add"
            placeholder="Stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
          <div>
            <label className="product-tag">Url imagen:</label>
          </div>
          <input
            type="text"
            id="url"
            name="url"
            className="input-add"
            placeholder="Url imagen"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <div>
            <label className="product-tag">Descripción:</label>
          </div>
          <textarea
            type="text"
            id="description"
            name="description"
            className="input-add"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="div-button">
            <input
              type="submit"
              value="Editar producto"
              className="submit-button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default EditItem;
