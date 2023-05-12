import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { call } from "redux-saga/effects";
import { RootState, } from "../app/store"
import TableauEmbed from "../components/TableauEmbed";
import {Category, Visualization} from "../api/data"

enum CategoryType{
	Education = "Education",
	Homelessness = "Homelessness",
	Municipal = "Municipal"
}

export interface TableauState{
	currCategory: CategoryType

	categories: {
		"Education": Category | null,
		"Municipal": Category | null,
		"Homelessness": Category | null
	}
}


const initialState: TableauState = {
	currCategory: CategoryType.Education,
	categories: {
		"Education": null,
		"Municipal": null,
		"Homelessness": null
	}
}

const TableauSlice = createSlice({
	
	name: "Category",
	initialState,
	reducers: {
		/*
		* Use Effect in Education
		* Call API Call if Redux State is null
		 */
		// setInitViz(state, action: PayloadAction<TableauViz[]>) {
		// 	state.categories[state.currCategory].vizs = action.payload;
		// },
		// setInitialVisualizationsError(state, action: PayloadAction<string>) {
		// 	state.categories[state.currCategory].loading = false;
		// 	state.categories[state.currCategory].error = action.payload;
		// },
		changeCategory(
			state,
			action: PayloadAction<CategoryType>
		) {
			state.currCategory = action.payload;
		},
		loadCategory(
			state,
			action: PayloadAction<Category>
		){
			state.currCategory = action.payload.name as CategoryType;
			state.categories[action.payload.name as CategoryType] = action.payload;
		}
	},
});

export const {changeCategory} = TableauSlice.actions;

export default TableauSlice.reducer;
//getting an error, not recognizing tableau as the name of the slice
export const getCurrCategory = (state: TableauState): string => state.currCategory;
export const getCategoryValue = (state: TableauState) => state.categories
// export const getCurrCategoryState = (state : TableauState): string => state.categories[state.currCategory]


/* Implementation 1*/
// function fetchTableauViz(url: string){
// 	return new Promise((resolve, reject) => {
// 		const viz = new window.tableau.Viz(document.getElementById("vizContainer"), url);
// 		viz.addEventListener("tabswitch", (event: any) => {
// 			console.log(event.getNewSheetName());
// 		})
// 		resolve(viz);
// 	})
// }







