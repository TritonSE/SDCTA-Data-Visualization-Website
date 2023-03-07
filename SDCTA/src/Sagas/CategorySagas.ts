import {call , put, takeEvery, takeLatest} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {setInitViz, changeCategory} from '../slices/CategorySlice';
import {TableauState, fetchTableauViz, setInitialVizualizationError} from "../slices/CategorySlice"


/* Helper Functions */
function* loadInitData(){
	try{
		const vizs = yield call(fetchTableauViz);
		yield put(setInitViz(vizs));
	}catch(error){
		yield put(setInitialVizualizationsError(error.message))
	}
}

function* watchChangeCategory(){
	yield takeLatest(changeCategory.type, function* (action : PayloadAction<"Education" | "Municipal" | "Homnelessness">){
		const currCategoryState = yield select((state: TableauState) => state.categories[action.payload])
		if(!currCategoryState.vizs.length){
			yield put(loadInitData());
		}
		yield put(setCurrentCategory(action.payload));
	});
}

//Sagas items

export function* tableauSagas(){
	yield watchChangeCategory();
}

export function* initialLoadSaga(){
	yield call(loadInitData);
}


