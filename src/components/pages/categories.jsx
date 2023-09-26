import { Link } from "react-router-dom";
import "./categories-styles.css";
import mini1 from "./../../assets/mini1.png";

const Categories = () => {
  return (
    <>
      <div className="categories">
        <div className="row">
          <Link to={"./verdura"} className="text-category">
            <div className="category">
              <img src={mini1} alt="logo" className="image-category" />
              <h1 className="text-category">Verduras</h1>
            </div>
          </Link>
          <Link to={"./fruta"} className="text-category">
            <div className="category">
              <img src={mini1} alt="logo" className="image-category" />
              <h1 className="text-category">Frutas</h1>
            </div>
          </Link>
        </div>
        <div className="row">
          <Link to={"./lacteos"} className="text-category">
            <div className="category">
              <img src={mini1} alt="logo" className="image-category" />
              <h1 className="text-category">Lacteos</h1>
            </div>
          </Link>
          <Link to={"./pastas"} className="text-category">
            <div className="category">
              <img src={mini1} alt="logo" className="image-category" />
              <h1 className="text-category">Pastas</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Categories;
