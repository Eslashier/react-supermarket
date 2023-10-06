import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../organisms/footer";
import "./layout-styles.css";
import NavbarAdmin from "../organisms/navbar-admin";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const LayoutAdmin = () => {
  const isLogged = useSelector((state) => state.login.isLogged);
  let navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("../../login");
    }
  }, [isLogged, navigate]);

  return (
    <>
      <NavbarAdmin />
      <Outlet />
      <Footer />
    </>
  );
};

export default LayoutAdmin;
