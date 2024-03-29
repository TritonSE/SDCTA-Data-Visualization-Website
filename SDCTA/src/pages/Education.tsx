import { Footer } from "../components/Footer";
import "./Pages.css";

const downloadIcon = "./Images/Icon.png";

export const Education: React.FC = () => {
  return (
    <div>
      <div className="heading">Education</div>
      <div className="top-row">
        <div className="subheading"> Data Subcategory Title</div>
        <div className="download-button">
          Download <img src={downloadIcon} alt="download icon" />
        </div>
      </div>
      <div className="description">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, sed.{" "}
      </div>
      <div className="learn-more"> Learn more</div>

      <div className="subheading"> Data Subcategory Title</div>
      <div className="description">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, sed.{" "}
      </div>
      <div className="learn-more"> Learn more</div>

      <Footer />
    </div>
  );
};
