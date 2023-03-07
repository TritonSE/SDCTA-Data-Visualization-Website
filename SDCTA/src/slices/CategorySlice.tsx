import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { call } from "redux-saga/effects";
import { RootState, } from "../app/store"
import TableauEmbed from "../components/TableauEmbed";


interface TableauViz {
	url: string
	viz: any
}

interface TableauCategoryState {
	vizs: TableauViz[];
	loading: boolean;
	error?: string;
}

interface TableauState{
	currCategory: "Education" | "Municipal" | "Homelessness"
	categories: {
		"Education": TableauCategoryState,
		"Municipal": TableauCategoryState,
		"Homelessness": TableauCategoryState
	}
}

const initCategoryState: TableauCategoryState = {
	vizs: [],
	loading: false,
	

}
const initialState: TableauState = {
	currCategory: "Education",
	categories: {
		"Education": initCategoryState,
		"Municipal": initCategoryState,
		"Homelessness": initCategoryState
	}
}

const TableauSlice = createSlice({
	name: "tableau",
	initialState,
	reducers: {
		setInitViz(state, action: PayloadAction<TableauViz[]>) {
			state.categories[state.currCategory].vizs = action.payload;
		},
		setInitialVisualizationsError(state, action: PayloadAction<string>) {
			state.categories[state.currCategory].loading = false;
			state.categories[state.currCategory].error = action.payload;
		},
		changeCategory(
			state,
			action: PayloadAction<"Education" | "Municipal" | "Homelessness">
		) {
			state.currCategory = action.payload;
		},
	},
});

export const {setInitViz, changeCategory} = TableauSlice.actions;

export default TableauSlice.reducer;
//getting an error, not recognizing tableau as the name of the slice
export const getCurrCategory = (state: TableauState) => state.currCategory;

export const getCurrCategoryState =(state : TableauState) => state.categories[state.currCategory]

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







