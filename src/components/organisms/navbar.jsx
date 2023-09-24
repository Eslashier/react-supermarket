import { NavLink } from "react-router-dom";
import "./navbar-styles.css";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="container">
          <a href="../" className="logo">
            <img src={logo} alt="logo" height="80px" />
          </a>
          <li className="nav-items">
            <NavLink
              to="/products"
              style={(isActive) => ({
                "textDecoration": isActive.isActive ? "underline" : "none",
              })}
            >
              Productos
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/categories"
              style={(isActive) => ({
                "textDecoration": isActive.isActive ? "underline" : "none",
              })}
            >
              Categorias
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/login"
            >
              Iniciar sesión
            </NavLink>
          </li>
        </ul>
        <hr className="line-divider-nav" />
      </nav>
    </>
  );
};

export default Navbar;
