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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis
            elementum urna sed efficitur. Suspendisse maximus egestas sapien,
            vitae malesuada ipsum tempor ut. Vivamus lacus diam, egestas non
            dapibus facilisis, feugiat a nulla. Mauris vestibulum metus mattis
            justo sagittis, id egestas ante ultricies.
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
