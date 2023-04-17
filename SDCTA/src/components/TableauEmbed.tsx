import React, { useRef, useEffect } from "react";
import { visitLexicalEnvironment } from "typescript";

interface TableauEmbedProp {
  url: string;
}
const { tableau } = window;
export const TableauEmbed: React.FC<TableauEmbedProp> = ({ url }) => {
  let viz;
  const ref = useRef(null);
  console.log(ref);

  const options = {
    device: "desktop",
    hideToolbar: true,
    hideTabs: true,
  };
  function initViz(): void {
    viz = window.tableau.VizManager.getVizs()[0];
    if (viz) {
      viz.dispose();
    }
    viz = new tableau.Viz(ref.current, url, options);
  }

  useEffect(() => {
    initViz();
  }, []);

  return (
    <div ref={ref} style={{ width: "100%", margin: "auto" }}>
      {" "}
    </div>
  );
};
