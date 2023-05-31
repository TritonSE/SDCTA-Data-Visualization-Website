import {call , put, takeEvery, takeLatest} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {changeCategory, loadCategory, CategoryType} from '../slices/CategorySlice';
import { Category, Visualization} from '../api/data';


 



function* watchChangeCategory(action: PayloadAction<Category>){
	try{
		const visualizations: Array<Visualization> = yield call(fetch, "http://localhost:3001/category/" + action.payload);
		console.log(action.payload);
		console.log("http://localhost:3001/category/"+ action.payload);
		const newCategory: Category = {...action.payload, visualizations};

		yield put(loadCategory(newCategory));
	}catch(e){
		console.log(e);
		console.log(action.payload._id);
	}
}

function* watchLoadCategory(){
	yield takeLatest(changeCategory.type, watchChangeCategory);
}

export default function* categorySaga(){
	yield watchLoadCategory();
}

