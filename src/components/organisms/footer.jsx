import { NavLink } from "react-router-dom";
import "./footer-styles.css";
import { AiOutlineInstagram, AiOutlineGlobal } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="websites-div">
          <div className="websites">
            <NavLink to="../" className="hyperlink">
              <AiOutlineGlobal style={{ fontSize: "20px" }} />
              &nbsp;www.FreshMarketA&L.com
            </NavLink>
          </div>
          <div className="websites">
            <a href="https://www.instagram.com/" className="hyperlink">
              <AiOutlineInstagram style={{ fontSize: "20px" }} />
              FreshmarketA&L
            </a>
          </div>
        </div>
        <hr className="line-divider" />
        <div className="brand">© 2023 Fresh market A&L | Copyright ©</div>
      </div>
    </>
  );
};

export default Footer;
