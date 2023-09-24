import OkButton from "../atoms/ok-button";
import TableInventory from "../organisms/table-inventory";
import "./inventory-styles.css";

const Inventory = () => {
  return (
    <>
      <div className="table-body">
        <TableInventory />
      </div>
      <div className="table-body">
        <OkButton text={"Agregar producto"}/>
      </div>
    </>
  );
};

export default Inventory;
