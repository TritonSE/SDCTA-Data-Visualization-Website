import landscape from '../Images/unsplash_dsV4yvL5UJk.jpg';
import EdVis from '../Images/Graph.jpg';
import './body.css'

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
					<img src={EdVis} alt="Education Visualization" />
					<div className="box-heading" >
						Education
					</div>
					<div className="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
				<div className="two">
					<img src={EdVis} alt="Homeless Visualization" />
					<div className="box-heading" >
						Homelessness
					</div>
					<div className="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
				<div className="three">
					<img src={EdVis} alt="Municipal Visualization" />
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