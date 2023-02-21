import landscape from '../Images/unsplash_dsV4yvL5UJk.jpg';
//import EdVis from '../Images/Graph.jpg';
import './body.css'
import EducationVis from '../Images/Education_Standin.png';
import HomelessnessVis from '../Images/Homelessness_Standin.png';
import MunicipalVis from '../Images/Municipal_Standin.png'


export const Body = () => {
	return (
		<><div>
			<div className="heading" >
				SDTEF Data Museum
			</div>
			<div className="description" >
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			</div>
			<img src={landscape} alt="sd landscape" />
		</div>
			<div className="box" >
				<div className="one">
					<div className='img' >
						<a href="../pages/Education.tsx">
							<img src={EducationVis} alt="Education Visualization" ></img>
						</a>	
					</div>
					<div className="box-heading" >
						Education
					</div>
					<div className="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
				<div className="two">
					<div className='img' >
						<img src={HomelessnessVis} alt="Homelessness Visualization" ></img>
						</div>
					<div className="box-heading" >
						Homelessness
					</div>
					<div className="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
				<div className="three">
				<div className='img' >
						<img src={MunicipalVis} alt="Municipal Visualization" ></img>
						</div>
					<div className="box-heading" >
						Municipal
					</div>
					<div className="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
			</div> </>
	)
};