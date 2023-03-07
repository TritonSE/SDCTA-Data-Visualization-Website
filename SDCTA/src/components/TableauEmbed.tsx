import React, { useRef, useEffect } from "react"
import { visitLexicalEnvironment } from "typescript";
import { useNavigate } from 'react-router-dom';

interface TableauEmbedProp {
	url: string;
}

const { tableau } = window;

export default function TableauEmbed({ url }: TableauEmbedProp) {
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
		let vizUrl = window.tableau.VizManager.getVizs()[0]?.getUrl();
		let myUrl = url.substring(0, url.indexOf("?"));
		console.log("VIZ URL IS " + vizUrl)
		console.log("MY URL IS " + url)
		console.log(vizUrl == myUrl)

		viz = window.tableau.VizManager.getVizs().find((viz: { getUrl: () => string; }) => { return viz.getUrl() == url });
		if (viz) {
			viz.dispose()
		}
		viz = new tableau.Viz(ref.current, url, options);
		viz.addEventListener("firstinteractive", () => { console.log("CLICKED") })

	}



	useEffect(() => {
		initViz();
	}, []);

	return (
		<div ref={ref} style={{ width: '70%', margin: 'auto', pointerEvents: "none" }}> </div>

	)
}
