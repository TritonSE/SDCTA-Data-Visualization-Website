import downloadIcon from "../Images/Icon.png";
import "./Pages.css";
import { useNavigate } from "react-router-dom";
import { TableauEmbed } from "../components/TableauEmbed";

export const Education: React.FC = () => {
  const nav = useNavigate();
  return (
    <div>
      {/* <Navbar /> */}
      <div className="heading">Education</div>
      <div className="top-row">
        {/* <div>
        <TabViz title="Title" link= "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1" description="ndjkfkwf"></TabViz>
        </div> */}
        <div className="subheading"> Data Subcategory Title</div>

        <div className="download-button">
          Download <img src={downloadIcon} alt="download icon" />
        </div>
      </div>
      <div
        onClick={() => { nav("/Data-Visualization"); }}
        style={{ cursor: "pointer" }}
      >
        <TableauEmbed
          url={
            "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1"
          }
          interactive={false}
        />
      </div>
      <div className="description">
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, sed.{" "}
      </div>
      <button className="learn-more" onClick={() => { nav("/Data-Visualization"); }}>
        {" "}
        Learn more
      </button>
    </div>
  );
};
