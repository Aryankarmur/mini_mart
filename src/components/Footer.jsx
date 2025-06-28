<<<<<<< HEAD
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="subfooter">
        <div>
          <h3>ABOUT</h3>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Careers</p>
          <p>Web Stories</p>
          <p>Press</p>
          <p>Corporate Information</p>
        </div>
        <div>
          <h3>GROUP COMPANIES</h3>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>
        <div>
          <h3>HELP</h3>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>
        <div>
          <h3>CONSUMER POLICY</h3>
          <p>Cancellation & Returns</p>
          <p>Terms Of User Security</p>
          <p>Privecy</p>
          <p>Sitemap</p>
          <p>Grievance Redressal</p>
          <p>EPR Compliance</p>
        </div>
        <hr />
        <div className="addres-register">
          <div>
            <h4>Address:</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              impedit vel minus unde aliquam pariatur molestiae ipsam facilis
              esse! Asperiores.
            </p>
          </div>
          <div className="social-div">
            <h4>Social:</h4>
            <div>
              <p>htr</p>
              <p>hty</p>
              <p>gfy</p>
              <p>ffg</p>
            </div>
          </div>
        </div>
        <div className="addres-register">
          <h4>Registered Office Address:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
            temporibus, exercitationem omnis eveniet cumque maxime consequuntur
            sapiente facilis quasi accusamus molestiae eos quo, nemo mollitia
            perferendis commodi ratione ducimus molestias!
          </p>
        </div>
      </div>
      <hr />
      <div className="subfooter">
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
=======
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
>>>>>>> a6c1ffcf728e3ad77688f1544bdde548c184c40b
      </div>
    </div>
  );
};

export default Footer;
