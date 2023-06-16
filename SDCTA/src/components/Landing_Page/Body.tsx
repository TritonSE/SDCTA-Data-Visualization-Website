import "./body.css";
import { useNavigate } from "react-router-dom";

const landscape = "./Images/Landing_Image.jpg";
const EducationVis = "./Images/Education_Standin.png";
const HomelessnessVis = "./Images/Homelessness_Standin.png";
const MunicipalVis = "./Images/Municipal_Standin.png";

export const Body: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="heading">SDTEF Data Museum</div>
        <div className="description">
          Welcome to the San Diego Taxpayers Educational Foundation data museum!
          This is SDTEF&apos;s repository for data on all things local public
          administration. Here you&apos;ll find a comprehensive quantitative picture
          of funding for important local public goods, such as homelessness
          services and education! Each data exhibit includes details on the
          appropriate uses and limitations of the data. If you have any
          questions about our data, you can contact us at info@sdcta.org.
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
          <div
            onClick={() => {
              navigate("/Education");
            }}
            className="image_line-heading"
          >
            Education
          </div>
          <div className="image_line-description">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </div>
        </div>
        <div className="second_Visual">
          <div className="img">
            <img src={HomelessnessVis} alt="Homelessness Visualization"></img>
          </div>
          <div
            onClick={() => {
              navigate("/Homelessness");
            }}
            className="image_line-heading"
          >
            Homelessness
          </div>
          <div className="image_line-description">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </div>
        </div>
        <div className="third_Visual">
          <div className="img">
            <img src={MunicipalVis} alt="Municipal Visualization"></img>
          </div>
          <div
            onClick={() => {
              navigate("/Municipal");
            }}
            className="image_line-heading"
          >
            Municipal
          </div>
          <div className="image_line-description">
            Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et
          </div>
        </div>
      </div>
    </>
  );
};
