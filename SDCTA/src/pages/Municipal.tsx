import { Footer } from '../components/Footer';
import TableauEmbed from '../components/TableauEmbed';
import { IndividualVisualization } from './IndividualVisualization';


export const Municipal = () => {
	const url = "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
	return (
		<>
			<IndividualVisualization url={url} csvlink={"https://www.google.com"} />
			{/* <TableauEmbed url={url}/> */}
			<Footer />
		</>
	)
}
