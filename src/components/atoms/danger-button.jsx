import PropTypes from 'prop-types';
import "./danger-button.css";
const DangerButton = (props) => {

    const { text } = props; 

  return (
    <>
      <button className={'danger-button'}>{text}</button>
    </>
  );
};

DangerButton.propTypes = {
    text: PropTypes.string,
}

export default DangerButton;