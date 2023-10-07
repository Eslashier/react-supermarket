import LoginButton from "../atoms/login-button";
import Footer from "../organisms/footer";
import "./login-styles.css";
import background from "../../assets/background.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { login } from "../../actions/users/login";
import { useAppDispatch } from "../../state/store";
import { useSelector } from "react-redux";

const Login = () => {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  const [isInvalid, setIsInvalid] = useState(false);
  const isLogged = useSelector((state) => state.login.isLogged);
  const error = useSelector((state) => state.login.error);
  let navigate = useNavigate();

  useEffect(() => {
    if (isLogged) {
      navigate("../admin/inventory");
    }
  }, [isLogged, error, navigate]);

  useEffect(() => {
    if (error) {
      setIsInvalid(true)
    }
  }, [error]);

  const dispatch = useAppDispatch();

  const OnLogin = (e) => {
    e.preventDefault();

    const payload = {
      email: mail,
      password: password,
    };

    dispatch(login(payload))
      .then(setIsInvalid(false))
  };

  return (
    <>
      <div className="login-container">
        <div
          className="image-left"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <NavLink
            to="../"
            style={{
              textDecoration: "none",
              width: "500px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className="title">FRESH MARKET A&L</h1>
            <h3 className="slogan">Productos frescos y de calidad</h3>
          </NavLink>
        </div>
        <div className="form">
          <form onSubmit={(e) => OnLogin(e)}>
            <div>
              <label htmlFor="fname" className="tags">
                Usuario:
              </label>
            </div>
            <div className="div-button">
              <input
                type="text"
                id="user"
                name="user"
                className="input-user"
                placeholder="example@mail.com"
                onChange={(e) => setMail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lname" className="tags">
                Contraseña:
              </label>
            </div>
            <div className="div-button">
              <input
                type="password"
                id="password"
                name="password"
                className="input-password"
                placeholder="contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="div-button">
              <h4 className="forgot-password">¿Olvidó su contraseña?</h4>
            </div>
            {isInvalid && (
              <div className="div-button">
                <h4 className="wrong-password">
                  Usuario o contraseña incorrecta
                </h4>
              </div>
            )}
            <div className="div-button">
              <LoginButton text={"Iniciar sesión"} />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
