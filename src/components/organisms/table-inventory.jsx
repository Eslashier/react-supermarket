import { useSelector } from "react-redux";
import RowInventory from "../molecules/row-inventory";
import './table-styles.css';
import { useEffect } from "react";
import { getProducts } from "../../actions/users/get-products";
import { useAppDispatch } from "../../state/store";

const TableInventory = () => {

  const inventory = useSelector((state) => state.products.products);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock (Uds.)</th>
            <th>URI Imagen</th>
            <th>Editar</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((row) => (
            <RowInventory key={row.id} data={row} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableInventory;
