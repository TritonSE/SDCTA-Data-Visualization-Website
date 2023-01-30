import backIcon from "./backIcon.svg"
import downloadIcon from "./downloadIcon.svg"
import tableauVisualization from "./tableauVisualization.png"
import "./IndividualVisualization.css"

export default function IndividualVisualization() {
    return (
      <div>
        <div>
            <p className='back-button'> <img src={backIcon} alt="back arrow icon"/>  Back to Education Data</p>
        </div>
        <div className='body'>
            <div className="top-row">
                <h2>Data Subcategory Title</h2>
                <p className="download-button">Download <img src={downloadIcon} alt="download icon"/></p>
            </div>
            <img className='tableauVisualization' src={tableauVisualization} alt="Tableau Data Visualization"/>
            <div className='body-text'>
                <h2>Data Analysis</h2>
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