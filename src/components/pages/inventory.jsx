import { Link } from "react-router-dom";
import OkButton from "../atoms/ok-button";
import TableInventory from "../organisms/table-inventory";
import "./inventory-styles.css";

const Inventory = () => {
  return (
    <>
      <div className="table-body">
        <TableInventory />
      </div>
      <div className="button-add">
        <Link to="../add-item">
          <OkButton text={"Agregar producto"} />
        </Link>
      </div>
    </>
  );
};

export default Inventory;
