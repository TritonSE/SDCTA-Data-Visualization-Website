import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css";

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3>San Diego Taxpayers Association</h3>
        <p>
          The San Diego Taxpayers Educational Foundation conducts independent
          research studies on various issue areas to educate San Diegans and
          inform the advocacy efforts of the Association.
        </p>
      </div>
      <div className="footer-right">
        <div className="address">
          <p>2508 Historic Decatur Rd. #220</p>
          <p>San Diego, CA 92106</p>

          <p>Contact: info@sdcta.org</p>
        </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/sdcta">
            <FaFacebookF className="icon" />
          </a>
          <a href="https://twitter.com/sdcta">
            <FaTwitter className="icon" />
          </a>
          <a href="https://www.instagram.com/sdcta">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/company/sdcta">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};
