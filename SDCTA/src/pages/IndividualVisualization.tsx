import backIcon from "./backIcon.svg";
import downloadIcon from "./downloadIcon.svg";
import "./IndividualVisualization.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { TableauEmbed } from "../components/TableauEmbed";
import { getVisByTitle } from "../api/consumer";
import { type VisualizationObject } from "../api/data";
import ErrorBoundary from "../components/ErrorBoundary";
import { Error404 } from "../components/404";
const initialState: VisualizationObject = {
  title: "",
  analysis: "",
  link: "",
  hasCSV: false,
};

export const IndividualVisualization: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [title] = useState(searchParams.get("title"));
  const [visObj, setVisObj] = useState<VisualizationObject | null>(
    initialState
  );

  if (!title) {
    return <Error404 />;
  }

  useEffect(() => {
    getVisByTitle(title).then(
      (response) => {
        setVisObj(response);
      },
      () => {
        setVisObj(null);
      }
    );
  }, []);

  if (visObj === null) {
    return <Error404 />;
  }

  return (
    <ErrorBoundary>
      <div>
        <div>
          <p className="IV-back-button">
            <img
              style={{ paddingLeft: "3px" }}
              src={backIcon}
              alt="back arrow icon"
            />
            Back to Education Data
          </p>
        </div>
        <div className="body">
          <div className="IV-Top-row">
            <h2>{visObj.title}</h2>
            <p className="download-button">
              Download <img src={downloadIcon} alt="download icon" />
            </p>
          </div>

          {visObj.link !== "" && <TableauEmbed url={visObj.link} />}

          <div className="body-text">
            <h2 id="Analysis">Data Analysis</h2>
            <p className="IV-description">{visObj.analysis}</p>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};
