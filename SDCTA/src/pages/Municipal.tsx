import { Footer } from '../components/Footer';
import TableauEmbed from '../components/TableauEmbed';
import {useDispatch, useSelector} from "react-redux";
import {changeCategory, getCategoryValue} from "../slices/CategorySlice";
import { Visualization } from '../api/data';
import { RootState } from '../app/store';
import {CategoryType} from "../slices/CategorySlice";


export const Municipal = () => {
	const url = "https://public.tableau.com/views/ofSD-CarlsbadHousingPermitsfrom2010-2022/Sheet1?:language=en-US&:display_count=n&:origin=viz_share_link";
	const dispatch = useDispatch();
  	dispatch(changeCategory(CategoryType.Municipal));
	const currCategory = useSelector(
    (state: RootState) => getCategoryValue(state.changeCategory)[CategoryType.Municipal]
  );
	const vizs = currCategory?.visualizations ?? [];
	console.log(currCategory?.visualizations);
	return (
    <>
      {vizs?.map((viz: Visualization) => (
		<TableauEmbed url = {viz.link} />
	  ))}
      <Footer />
    </>
  );
}

