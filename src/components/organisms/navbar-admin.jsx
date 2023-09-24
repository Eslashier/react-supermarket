import { Link, NavLink } from "react-router-dom";
import "./navbar-styles.css";
import logo from "../../assets/logo.png";

const NavbarAdmin = () => {
  return (
    <>
      <nav>
        <ul className="container">
          <NavLink to="../" className="logo">
            <img src={logo} alt="logo" height="80px" />
          </NavLink>
          <li className="nav-items">
            <NavLink
              to="/admin/inventory"
              style={(isActive) => ({
                textDecoration: isActive.isActive ? "underline" : "none",
              })}
            >
              Inventario
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink
              to="/admin/add-item"
              style={(isActive) => ({
                textDecoration: isActive.isActive ? "underline" : "none",
              })}
            >
              Agregar producto
            </NavLink>
          </li>
          <li className="nav-items">
            <Link to={".."}>Cerrar sesión</Link>
          </li>
        </ul>
        <hr className="line-divider-nav" />
      </nav>
    </>
  );
};

export default NavbarAdmin;
