import "./home-styles.css";
import header from "./../../assets/header.png";
import mini1 from "./../../assets/mini1.png";
import mini2 from "./../../assets/mini2.png";
import mini3 from "./../../assets/mini3.png";

const Home = () => {
  return (
    <>
      <div className="body">
        <div className="header">
          <img src={header} alt="logo" className="image-header" />
        </div>
        <div className="text-images">
          <div className="text-set">
            Il était un grand nombre de fois Un homme qui aimait une femme Il
            était un grand nombre de fois Une femme qui aimait un homme Il était
            un grand nombre de fois Une femme et un homme Qui n'aimaient pas
            celui et celle qui les aimaient Il était une fois Une seule fois
            peut-être Une femme et un homme qui s'aimaient
          </div>
          <img src={mini1} alt="logo" className="image-set" />
          <img src={mini2} alt="logo" className="image-set" />
          <img src={mini3} alt="logo" className="image-set" />
        </div>
      </div>
    </>
  );
};

export default Home;
