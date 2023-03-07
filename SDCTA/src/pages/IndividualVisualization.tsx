import backIcon from "./backIcon.svg"
import downloadIcon from "./downloadIcon.svg"
import tableauVisualization from "./tableauVisualization.png"
import "./IndividualVisualization.css"
import TableauEmbed from '../components/TableauEmbed';

interface IndividualVisualizationProp {
    url: string;
    csvlink: string;
}

export default function IndividualVisualization({ url, csvlink }: IndividualVisualizationProp) {
    return (
        <div>
            <div>
                <p className='back-button'> <img src={backIcon} alt="back arrow icon" />  Back to Education Data</p>
            </div>
            <div className='body'>
                <div className="top-row">
                    <h2>Data Subcategory Title</h2>
                    <p className="download-button">Download <img src={downloadIcon} alt="download icon" /></p>
                </div>
                {/* <img className='tableauVisualization' src={tableauVisualization} alt="Tableau Data Visualization"/> */}
                <TableauEmbed url={url} />
                <div className='body-text'>
                    <h2 id="Analysis">Data Analysis</h2>
                    <p className="dscription">
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, sed.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </span>

                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, sed.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}