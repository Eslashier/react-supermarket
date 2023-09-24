import RowInventory from "../molecules/row-inventory";
import './table-styles.css';

const info = [
  {
    id: "an id",
    name: "Leche",
    price: "7000",
    stock: "20",
    uri: "https://an.uri.com/image",
  },
  {
    id: "an id2",
    name: "Leche",
    price: "7000",
    stock: "30",
    uri: "https://an.uri.com/image",
  },
  {
    id: "an id3",
    name: "Leche",
    price: "7000",
    stock: "20",
    uri: "https://an.uri.com/image",
  },
  {
    id: "an id4",
    name: "Leche",
    price: "7000",
    stock: "30",
    uri: "https://an.uri.com/image",
  },
  {
    id: "an id5",
    name: "Leche",
    price: "7000",
    stock: "20",
    uri: "https://an.uri.com/image",
  },
  {
    id: "an id6",
    name: "Leche",
    price: "7000",
    stock: "30",
    uri: "https://an.uri.com/image",
  },
];

const TableInventory = () => {
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
          {info.map((row) => (
            <RowInventory key={row.id} data={row} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableInventory;
