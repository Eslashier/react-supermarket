import { useDispatch } from "react-redux";
import "./add-item-styles.css";
import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { postProduct } from "../../actions/users/add-product";

const AddItem = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  let navigate = useNavigate();

  const onAdd = (e) => {
    e.preventDefault();

    if (name && description && url && +price > 0 && +stock >= 0) {
      const productToAdd = {
        id: uuid(),
        name: name,
        price: price,
        stock: stock,
        uri: url,
        description: description,
      };
      dispatch(postProduct(productToAdd));
      navigate("../inventory");
    } else {
      alert(
        "All the fields must be provided, maximum stock must be greater than minimum stock and values must be greater than zero"
      );
    }
  };

  return (
    <>
      <div className="body">
        <form onSubmit={(e) => onAdd(e)}>
          <div>
            <label className="product-tag">Nombre:</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="input-add"
            placeholder="Nombre del producto"
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
            onChange={(e) => setPrice(e.target.value)}
          />
          <div>
            <label className="product-tag">Stock:</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="input-add"
            placeholder="Stock"
            onChange={(e) => setStock(e.target.value)}
          />
          <div>
            <label className="product-tag">Url imagen:</label>
          </div>
          <input
            type="text"
            id="name"
            name="name"
            className="input-add"
            placeholder="Url imagen"
            onChange={(e) => setUrl(e.target.value)}
          />
          <div>
            <label className="product-tag">Descripción:</label>
          </div>
          <textarea
            type="text"
            id="name"
            name="name"
            className="input-add"
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="div-button">
            <input
              type="submit"
              value="Agregar producto"
              className="submit-button"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
