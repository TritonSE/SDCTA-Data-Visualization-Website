import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { call, put, takeLatest } from "redux-saga/effects";
import { RootState, } from "../app/store"
import { Category, Visualization } from "../api/data"

export enum CategoryType {
	Education = "Education",
	Homelessness = "Homelessness",
	Municipal = "Municipal"
}

interface CategoryState {
	loading: boolean,
	currCategory: CategoryType
	categories: {
		"Education": Category | null,
		"Municipal": Category | null,
		"Homelessness": Category | null
	}
}

const initialState: CategoryState = {
	loading: false,
	currCategory: CategoryType.Education,
	categories: {
		"Education": null,
		"Municipal": null,
		"Homelessness": null
	}
}

const categorySlice = createSlice({

	name: "Category",
	initialState,
	reducers: {
		loadCategory(
			state,
			action: PayloadAction<CategoryType>
		) {
			state.loading = true;
		},
		changeCategory(
			state,
			action: PayloadAction<CategoryType>
		) {
			state.currCategory = action.payload;
		},
		updateCategory(
			state,
			action: PayloadAction<Category>
		) {
			state.loading = false;
			state.currCategory = action.payload.name as CategoryType;
			state.categories[action.payload.name as CategoryType] = action.payload;
		},

	},
});

export const { loadCategory, changeCategory, updateCategory } = categorySlice.actions;

export default categorySlice.reducer;
//getting an error, not recognizing tableau as the name of the slice
export const getCurrCategory = (state: RootState): string => state.category.currCategory;
export const getCategoryValue = (state: RootState) => state.category.categories;