import { Outlet} from "react-router-dom";
import Footer from "../organisms/footer";
import "./layout-styles.css"
import NavbarAdmin from "../organisms/navbar-admin";

const LayoutAdmin = () => {
    return (
        <>
          <NavbarAdmin />
          <Outlet />
          <Footer />
        </>
      )
};

export default LayoutAdmin;