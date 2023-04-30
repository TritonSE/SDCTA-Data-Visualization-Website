import { TableauEmbed } from "../components/TableauEmbed";
import { useNavigate } from "react-router-dom";

export const Homelessness: React.FC = () => {
  const nav = useNavigate();

  return (
    <div>
      {/* <Navbar /> */}
      <div className="heading">TEST</div>
      <div className="top-row">
        {/* <div>
    <TabViz title="Title" link= "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1" description="ndjkfkwf"></TabViz>
    </div> */}
        <div className="subheading"> Data Subcategory Title</div>
      </div>
      <div
        onClick={() => {
          nav("/Data-Visualization");
        }}
        style={{
          cursor: "pointer",
          width: "35%",
        }}
      >
        <TableauEmbed
          url={
            "https://public.tableau.com/views/SDTEFHomelessnessDashboard/MapperCap"
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
      <button
        className="learn-more"
        onClick={() => {
          nav("/Data-Visualization");
        }}
      >
        {" "}
        Learn more
      </button>
      <div className="top-row">
        {/* <div>
    <TabViz title="Title" link= "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1" description="ndjkfkwf"></TabViz>
    </div> */}
        <div className="subheading"> Data Subcategory Title</div>
      </div>
      <div
        onClick={() => {
          nav("/Data-Visualization");
        }}
        style={{ cursor: "pointer", width: "35%" }}
      >
        <TableauEmbed
          url={
            "https://public.tableau.com/views/SDTEFHomelessnessDashboard-spentpercapbycategory/CateperCap"
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
      <button
        className="learn-more"
        onClick={() => {
          nav("/Data-Visualization");
        }}
      >
        {" "}
        Learn more
      </button>
      <div className="top-row">
        {/* <div>
    <TabViz title="Title" link= "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1" description="ndjkfkwf"></TabViz>
    </div> */}
        <div className="subheading"> Data Subcategory Title</div>
      </div>
      <div
        onClick={() => {
          nav("/Data-Visualization");
        }}
        style={{ cursor: "pointer", width: "35%" }}
      >
        <TableauEmbed
          url={
            "https://public.tableau.com/views/SDTEFHomelessnessDashboard-spentpercapbyfundingsource/SourceperCap"
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
      <button
        className="learn-more"
        onClick={() => {
          nav("/Data-Visualization");
        }}
      >
        {" "}
        Learn more
      </button>
    </div>
  );
};
