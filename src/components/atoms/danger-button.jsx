import PropTypes from "prop-types";
import "./danger-button.css";
const DangerButton = ({ onClickFunction, text }) => {
  return (
    <>
      <button className={"danger-button"} onClick={onClickFunction}>
        {text}
      </button>
    </>
  );
};

DangerButton.propTypes = {
  onClickFunction: PropTypes.func,
  text: PropTypes.string,
};

export default DangerButton;
