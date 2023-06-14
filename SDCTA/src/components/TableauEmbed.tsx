import React, { useRef, useEffect } from "react"
import { visitLexicalEnvironment } from "typescript";
import { useNavigate } from 'react-router-dom';
import { getCategoryByName } from "../api/consumer";

interface TableauEmbedProp {
	url: string;
}

const { tableau } = window;

export default function TableauEmbed({ url }: TableauEmbedProp) {
	//const navigate = useNavigate();
	let viz;
	const ref = useRef(null);
	const options = {
		device: "desktop",
		hideToolbar: true,
		hideTabs: true,
	};
	function initViz() {
		viz = window.tableau.VizManager.getVizs().find((viz: { getUrl: () => string; }) => { return viz.getUrl() == url });
		if (viz) {
			viz.dispose()
		}
		viz = new tableau.Viz(ref.current, url, options);
	}

	useEffect(() => {
		initViz();
	}, []);

	return (
		<div ref={ref} style={{ width: '70%', margin: 'auto', pointerEvents: "none" }}> </div>

	)
}
