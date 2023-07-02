import React, { useRef, useEffect } from "react";
import { visitLexicalEnvironment } from "typescript";
import { useNavigate } from "react-router-dom";
interface TableauEmbedProp {
  url: string;
  interactive: boolean; // should tableau component be interactive?
}

const { tableau } = window;

export default function TableauEmbed({ url, interactive }: TableauEmbedProp) {
  //const navigate = useNavigate();
  let viz;
  const ref = useRef(null);
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
        width: "100%",
        margin: "auto",
        pointerEvents: interactive ? "auto" : "none",
      }}
    >
      {" "}
    </div>
  );
}
