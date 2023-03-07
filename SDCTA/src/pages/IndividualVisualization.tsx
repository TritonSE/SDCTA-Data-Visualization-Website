import backIcon from "./backIcon.svg";
import downloadIcon from "./downloadIcon.svg";
import "./IndividualVisualization.css";

import TableauEmbed from "../components/TableauEmbed";

interface IndividualVisualizationProp {
  url: string;
  csvlink: string;
}

export const IndividualVisualization: React.FC = ({
  url,
  csvlink,
}: IndividualVisualizationProp) => {
  return (
    <div>
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

        <TableauEmbed url={url} />
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
