import { PiXLogo } from "react-icons/pi";
import { RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import logo from "../assets/images/logo.jpg";
import developer from "../assets/images/developer_img.jpg";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer_main-div">
      <div className="footer-content">
        <div className="footer-logo">
          <Link to="/">
            <div className="logo-img">
              <img src={logo} alt="" />
            </div>
            <h1>Mini Mart</h1>
          </Link>
        </div>
        <div className="footer-links">
          <Link to="/About">About Us</Link>
          <Link to="/Contact">Contact Us</Link>
        </div>
        <div className="connection-link">
          <a href="https://x.com/@AryanKaramur" target="_blank" >
            <PiXLogo />
          </a>
          <a href="https://www.linkedin.com/in/aryankaramur/" target="_blank" >
            <RxLinkedinLogo />
          </a>
          <a href="https://github.com/Aryankarmur" target="_blank" >
            <RxGithubLogo />
          </a>
          <a href="https://www.instagram.com/ahir_aryan_karmur_/#" target="_blank" >
            <RxInstagramLogo />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="devloper-detail">
          <p>Developed by : </p>
          <div className="developer">
            <div className="developer-img">
              <img src={developer} alt="" />
            </div>
            <div>
              <span className="dev-pation">Frontend developer</span>
              <br />
              <span className="dev-name">Aryan Karmur</span>
            </div>
          </div>
        </div>
        <p className="rights_p"> &copy; 2025 Mini Mart. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
