import PropTypes from 'prop-types';
import "./ok-button.css";
const OkButton = (props) => {

    const { text } = props; 

  return (
    <>
      <button className={'ok-button'}>{text}</button>
    </>
  );
};

OkButton.propTypes = {
    text: PropTypes.string,
}

export default OkButton;
