import landscape from "./../../Images/Landing_Image.jpg";
import "./body.css";
import EducationVis from "./../../Images/Education_Standin.png";
import HomelessnessVis from "./../../Images/Homelessness_Standin.png";
import MunicipalVis from "./../../Images/Municipal_Standin.png";

export const Body: React.FC = () => {
  return (
    <>
      <div>
        <div className="heading">SDTEF Data Museum</div>
        <div className="description">
          Welcome to the San Diego Taxpayers Educational Foundation data museum! This is SDTEF&aposs repository for data on all things local public administration. Here you&aposll find a comprehensive quantitative picture of funding for important local public goods, such as homelessness services and education!
          Each data exhibit includes details on the appropriate uses and limitations of the data. If you have any questions about our data, you can contact us at info@sdcta.org.
          Click <a href="https://sdtef.org/"> here </a> to learn more about SDTEF and opportunities for involvement.
        </div>
        <div className="imgbox">
          <img className="center-fit" src={landscape} alt="sd landscape" />
        </div>
      </div>
      <div className="image_line">
        <div className="first_Visual">
          <div className="img">
            <img src={EducationVis} alt="Education Visualization"></img>
          </div>
          <div className="image_line-heading">Education</div>
          <div className="image_line-description">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </div>
        </div>
        <div className="second_Visual">
          <div className="img">
            <img src={HomelessnessVis} alt="Homelessness Visualization"></img>
          </div>
          <div className="image_line-heading">Homelessness</div>
          <div className="image_line-description">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </div>
        </div>
        <div className="third_Visual">
          <div className="img">
            <img src={MunicipalVis} alt="Municipal Visualization"></img>
          </div>
          <div className="image_line-heading">Municipal</div>
          <div className="image_line-description">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </div>
        </div>
      </div>
    </>
  );
};
