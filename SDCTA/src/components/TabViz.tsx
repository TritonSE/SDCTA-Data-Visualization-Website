import downloadIcon from "../Images/Icon.png"
import { Footer } from '../components/Footer';
import './Pages.css';
import TableauEmbed from "../components/TableauEmbed";
import { propTypes } from "react-bootstrap/esm/Image";



interface TableauVizProp {
    title: string;
    link: string;
    description: string;
}


export const TabViz = ({link,title, description }: TableauVizProp) => {
    return (
        <>
    <div className="subheading"> {title} </div>
    <div className="download-button">
        Download <img src={downloadIcon} alt="download icon" />
    </div>
	<><div onClick={() => console.log("HERE")}>
        <TableauEmbed url = {link} />
    </div>
    <div className="description">
        {" "}
        {description} {" "}
        </div>
        <div className="learn-more"> Learn more</div></>
        </>
    )
    
          
}