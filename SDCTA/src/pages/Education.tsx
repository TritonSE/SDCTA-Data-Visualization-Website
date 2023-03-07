import downloadIcon from "../Images/Icon.png"
import { Footer } from '../components/Footer';
import './Pages.css';
import TableauEmbed from "../components/TableauEmbed";
import { useNavigation } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { TabViz } from "../components/TabViz";

export const Education = () => {
	//const navigate = useNavigation()
	return (
		<div>
			{/* <Navbar /> */}
			<div className="heading">Education</div>
			<div className="top-row">
				{/* <div>
					<TabViz title="Title" link= "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1" description="ndjkfkwf"></TabViz>
				</div> */}
				<div className="subheading"> Data Subcategory Title</div>

				<div className="download-button">
					Download <img src={downloadIcon} alt="download icon" />
				</div>
			</div>
			<div onClick={() => console.log("HERE")}>
				<TableauEmbed
					url={
						"https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1"
					}
				/>
			</div>
			<div className="description">
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua. Ut enim ad minim veniam, sed.{" "}
			</div>
			<div className="learn-more"> Learn more</div>
			<div className="subheading"> Data Subcategory Title</div>
			<div onClick={() => console.log("HERE")}>
				<TableauEmbed
					url={
						"http://public.tableau.com/views/RegionalSampleWorkbook/Storms"
					}
				/>
			</div>
			<div className="description">
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
				enim ad minim veniam, sed do eiusmod tempor incididunt ut labore
				et dolore magna aliqua. Ut enim ad minim veniam, sed.{" "}
			</div>
			<div className="learn-more"> Learn more</div>

			<Footer />
		</div>
	);
}
