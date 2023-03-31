import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface TableauEmbedProp {
  url: string;
  interactive: boolean;
}
const { tableau } = window;
export const TableauEmbed: React.FC<TableauEmbedProp> = ({
  url,
  interactive,
}) => {
  //const navigate = useNavigate();
  let viz;
  const ref = useRef(null);
  console.log(ref);

  const options = {
    device: "desktop",
    hideToolbar: true,
    hideTabs: true,
  };
  function initViz() {
    viz = window.tableau.VizManager.getVizs().find(
      (viz: { getUrl: () => string }) => {
        return viz.getUrl() == url;
      }
    );
    if (viz) {
      viz.dispose();
    }
    viz = new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    initViz();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "70%",
        margin: "auto",
        pointerEvents: interactive ? "all" : "none",
      }}
    >
      {" "}
    </div>
  );
};
export default TableauEmbed;
