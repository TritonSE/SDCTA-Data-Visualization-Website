import backIcon from "./backIcon.svg";
import "./IndividualVisualization.css";
import { TableauEmbed } from "../components/TableauEmbed";
import { useNavigate } from "react-router-dom";
import { DisclaimerModal } from "../components/modal/disclaimer";
import { useState } from "react";

export const IndividualVisualization: React.FC = () => {
  const nav = useNavigate();
  const [showModal, setShowModal] = useState(true)
  return (
    <>
      <DisclaimerModal show={showModal} setShow={setShowModal} />
      <div>
        <div>
          <button
            className="IV-back-button"
            onClick={() => {
              nav("/Education");
            }}
          >
            {" "}
            <img
              style={{ paddingLeft: "3px" }}
              src={backIcon}
              alt="back arrow icon"
            />{" "}
            Back to Education Data
          </button>
        </div>
        <div className="body">
          <div className="IV-Top-row">
            <h2>Data Subcategory Title</h2>
          </div>

          <TableauEmbed
            url={
              " https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1"
            }
            interactive={true}
          />
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
    </>
  );
};
