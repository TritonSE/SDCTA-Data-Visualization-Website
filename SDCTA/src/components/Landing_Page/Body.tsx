import "./body.css";

const landscape = "./Images/Landing_Image.jpg";
const EducationVis = "./Images/Education_Standin.png";
const HomelessnessVis = "./Images/Homelessness_Standin.png";
const MunicipalVis = "./Images/Municipal_Standin.png";

export const Body: React.FC = () => {
  return (
    <>
      <div>
        <div className="heading">SDTEF Data Museum</div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
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
