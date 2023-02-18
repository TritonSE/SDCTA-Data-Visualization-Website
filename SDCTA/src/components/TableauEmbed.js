import React, {useRef, useEffect} from "react"
import { visitLexicalEnvironment } from "typescript";
const { tableau } = window;
function TableauEmbed(){
	let viz;
	const ref = useRef(null);
	console.log(ref);
	const url = 
		"https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
	const options = {
		device: "desktop",
	};
	function initViz(){
		viz = window.tableau.VizManager.getVizs()[0];
		if (viz) {
			viz.dispose()
		}
		viz = new tableau.Viz(ref.current, url, options);

	}

useEffect(() => {
	initViz();
}, []);

return (
    <div ref={ref} style={{width:'70%', margin:'auto'}} />

)
}
export default TableauEmbed;