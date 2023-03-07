import {createSlice} from "@reduxjs/toolkit"
import {type RootState} from "../app/store"

interface TableauViz {
	url: string
	viz: any
}
export interface CategoryState {
	Education: TableauViz[]
	Municipal: TableauViz[]
	Homelessness: TableauViz[]
}

const initialState: CategoryState = {
	Education: []
}