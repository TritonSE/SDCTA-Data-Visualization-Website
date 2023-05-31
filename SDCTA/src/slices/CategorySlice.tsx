import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects";
import { RootState, } from "../app/store"
import {Category, Visualization} from "../api/data"

export enum CategoryType{
	Education = "Education",
	Homelessness = "Homelessness",
	Municipal = "Municipal"
}

interface TableauState{
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
			
		},
		
	},
});

export const {changeCategory, loadCategory} = TableauSlice.actions;

export default TableauSlice.reducer;
//getting an error, not recognizing tableau as the name of the slice
export const getCurrCategory = (state: TableauState): string => state.currCategory;
export const getCategoryValue = (state: TableauState) => state.categories








