import {call , put, takeEvery, takeLatest} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {loadCategory, updateCategory, CategoryType} from '../slices/categorySlice';
import { Category, Visualization} from '../api/data';
import { getCategoryByName } from '../api/consumer';

function* loadCategorySaga(action: PayloadAction<CategoryType>){
	try{
		console.log("IN SAGA")
		console.log(action)
		const newCategory: Category = yield call(getCategoryByName, action.payload);
		console.log(newCategory)
		yield put(updateCategory(newCategory));
	}catch(e){
		console.log(e);
	}
}

function* watchLoadCategory(){
	yield takeLatest(loadCategory.type, loadCategorySaga);
}

export default function* categorySaga(){
	yield watchLoadCategory();
}