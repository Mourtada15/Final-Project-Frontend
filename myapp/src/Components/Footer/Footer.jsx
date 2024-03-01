import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <h5 className="footer-about-us-header"><b>About Us</b></h5>
          <ul className="footer-about-us">
            <li><a href="">About MarketEase</a></li>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h5><b>Stay Connected</b></h5>
          <div className="footer-social-icons">
            <a href=""><img src="facebook.png" alt="icon" /></a>
            <a href=""><img src="instagram.png" alt="icon" /></a>
            <a href=""><img src="twitter.png" alt="icon" /></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;