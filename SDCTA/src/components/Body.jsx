import landscape from '../unsplash_dsV4yvL5UJk.jpg';
import EdVis from '../Graph.jpg';

export const Body = () => {
	return (
		<><div>
			<div class="heading" >
				Data Museum
			</div>
			<div class="description" >
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			</div>
			<img src={landscape} alt="sd landscape" />
		</div>
			<div class="box" >
				<div class="one">
					<img src={EdVis} alt="Education Visualization" />
					<div class="box-heading" >
						Education
					</div>
					<div class="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
				<div class="two">
					<img src={EdVis} alt="Homeless Visualization" />
					<div class="box-heading" >
						Homelessness
					</div>
					<div class="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
				<div class="three">
					<img src={EdVis} alt="Municipal Visualization" />
					<div class="box-heading" >
						Municipal
					</div>
					<div class="box-description" >
						Lorem ipsum dolor sit amet, sed do consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					</div>
				</div>
			</div> </>
	)
};