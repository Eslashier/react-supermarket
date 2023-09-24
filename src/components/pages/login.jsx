import LoginButton from "../atoms/login-button";
import Footer from "../organisms/footer";
import "./login-styles.css";
import background from "../../assets/background.png";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
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
          <form>
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
              />
            </div>
            <div className="div-button">
              <h4 className="forgot-password">¿Olvidó su contraseña?</h4>
            </div>
            <Link to={"../admin/inventory"} style={{ textDecoration: "none" }}>
              <div className="div-button">
                <LoginButton text={"Iniciar sesión"} />
              </div>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
