import DangerButton from "../atoms/danger-button";
import PropTypes from "prop-types";
import OkButton from "../atoms/ok-button";
import "./row-inventory-styles.css";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { deleteProduct } from "../../actions/users/delete-product";

const RowInventory = (props) => {
  const { id, name, price, stock, uri } = props.data;

  const dispatch = useDispatch();

  const onDelete = (id) => {
    console.log(id);
    dispatch((deleteProduct({id})));
  };

  const toUrl = `/admin/inventory/edit/${id}`

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>${price}</td>
        <td>{stock}</td>
        <td className="uri-cell">{uri}</td>
        <td>
          <Link to={toUrl}>
          <OkButton text="Editar" />
          </Link>
        </td>
        <td>
          <DangerButton text="Borrar" onClickFunction={()=>onDelete(id)}/>
        </td>
      </tr>
    </>
  );
};

RowInventory.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    stock: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
};

export default RowInventory;
