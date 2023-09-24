import { Outlet} from "react-router-dom";
import Footer from "../organisms/footer";
import "./layout-styles.css"
import Navbar from "../organisms/navbar";

const Layout = () => {
    return (
        <>
          <Navbar />
          <Outlet />
          <Footer />
        </>
      )
};

export default Layout;