import backIcon from "./backIcon.svg";
import downloadIcon from "./downloadIcon.svg";
import "./IndividualVisualization.css";

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TableauEmbed } from "../components/TableauEmbed";
import { getVisByTitle } from "../api/consumer"
import { setUISelectionRaw } from "@testing-library/user-event/dist/types/document/UI";
import {VisualizationObject} from "../api/data"

const initialState: VisualizationObject = {
  title: "",
  analysis: "",
  link: "",
  hasCSV: false,
}

export  const  IndividualVisualization: React.FC = () => {

  const [searchParams] = useSearchParams();
  const [title] = useState(searchParams.get('title'));
  const [visObj, setVisObj] = useState(initialState);

  if (!title) {
    console.log("title empty")
    //navigate away
    return;
  }

  useEffect(()=> {
    getVisByTitle(title).then((response) => {
      if (response === null) {
        console.log("couldn't get url");
        //navigate away
        return;
      }
      setVisObj(response);
    })
  }, [])

  console.log("visobje")
  console.log(visObj);
  return (    
  <div>
      <h1>{visObj.link}</h1>
      <div>
        <p className="IV-back-button">
          {" "}
          <img
            style={{ paddingLeft: "3px" }}
            src={backIcon}
            alt="back arrow icon"
          />{" "}
          Back to Education Data
        </p>
      </div>
      <div className="body">
        <div className="IV-Top-row">
          <h2>Data Subcategory Title</h2>
          <p className="download-button">
            Download <img src={downloadIcon} alt="download icon" />
          </p>
        </div>

        {/* <TableauEmbed url={"https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link"} /> */}
        {/* <TableauEmbed url={"https://public.tableau.com/app/profile/julian.del.castillo/viz/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1"} /> */}
        <TableauEmbed url={visObj.link} />
        
        <div className="body-text">
          <h2 id="Analysis">Data Analysis</h2>
          <p className="IV-description">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, sed. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </span>

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua. Ut enim ad minim veniam, sed. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
