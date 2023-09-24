import PropTypes from "prop-types";
import "./add-button.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const AddButton = (props) => {
  const { text } = props;

  return (
    <>
      <button className={"add-button"}>{text} <AiOutlineShoppingCart style={{ fontSize: "15px", marginLeft: "10px"}} /></button>      
    </>
  );
};

AddButton.propTypes = {
  text: PropTypes.string,
};

export default AddButton;
