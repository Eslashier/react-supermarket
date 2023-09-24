import DangerButton from "../atoms/danger-button";
import PropTypes from "prop-types";
import OkButton from "../atoms/ok-button";

const RowInventory = (props) => {

  const { id, name, price, stock, uri } = props.data;

  return (
    <>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>${price}</td>
        <td>{stock}</td>
        <td>{uri}</td>
        <td>
          <OkButton text="Editar" />
        </td>
        <td>
          <DangerButton text="Borrar" />
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
