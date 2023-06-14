import { Footer } from '../components/Footer';
import downloadIcon from "../Images/Icon.png"
import TableauEmbed from '../components/TableauEmbed';
import { useDispatch, useSelector } from "react-redux";
import { loadCategory, getCategoryValue } from "../slices/CategorySlice";
import { Visualization } from '../api/data';
import { RootState } from '../app/store';
import { CategoryType } from "../slices/CategorySlice";
import { useEffect } from 'react';


export const Municipal = () => {
	const dispatch = useDispatch();
	const currCategory = useSelector(
		(state: RootState) => getCategoryValue(state.changeCategory)[CategoryType.Municipal]
	);
	useEffect(() => {
		if (currCategory === null) {
			dispatch(loadCategory(CategoryType.Municipal));
		}
	}, []);

	const vizs = currCategory?.visualizations ?? [];
	return (
		<>
			<div className="heading">Municipal</div>
			{vizs?.map((viz: Visualization) => (
				<>
					<div className="top-row">
						<div className="subheading">{viz.title}</div>

						<div className="download-button">
							Download <img src={downloadIcon} alt="download icon" />
						</div>
					</div>
					<div onClick={() => console.log("HERE")}>
						<TableauEmbed
							url={
								viz.link
							}
						/>
					</div>
					<div className="description">
						{viz.analysis}
					</div>
					<div className="learn-more"> Learn more</div>
				</>
			))}
			<Footer />
		</>
	);
}

