import PropTypes from 'prop-types';
import "./login-button.css";
const LoginButton = (props) => {

    const { text } = props; 

  return (
    <>
      <button className={'login-button'}>{text}</button>
    </>
  );
};

LoginButton.propTypes = {
    text: PropTypes.string,
}

export default LoginButton;
