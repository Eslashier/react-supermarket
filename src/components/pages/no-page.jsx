import Footer from "../organisms/footer";
import Navbar from "../organisms/navbar";
import "./no-page-styles.css"

const NoPage = () => {
  return (
    <>
      <Navbar />
      <div className="body">
        <h1>Página no encontrada</h1>
      </div>
      <Footer />
    </>
  );
};

export default NoPage;
