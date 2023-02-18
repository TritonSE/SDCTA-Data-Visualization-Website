import React, {useRef, useEffect} from "react"
const { tableau } = window;
function TableauEmbed(){
	const ref = useRef(null);
	console.log(ref);
	const url = 
		"https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
	const options = {
		device: "desktop",
	};
function initViz(){
	new tableau.Viz(ref.current, url, options);
}

useEffect(() => {
	initViz();
});

return (
	<div ref={ref}> </div>
)
}
export default TableauEmbed;