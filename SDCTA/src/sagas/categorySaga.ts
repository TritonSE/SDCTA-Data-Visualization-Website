import { call, put, takeLatest } from "redux-saga/effects";
import { type Effect, type ForkEffect } from "redux-saga/effects"
import { type PayloadAction } from "@reduxjs/toolkit";
import {
  loadCategory,
  updateCategory,
  type CategoryType,
} from "../slices/categorySlice";
import { type Category } from "../api/data";
import { getCategoryByName } from "../api/consumer";

function* loadCategorySaga(action: PayloadAction<CategoryType>): Generator<Effect, void, any> {
  try {
    const newCategory: Category = yield call(getCategoryByName, action.payload);
    yield put(updateCategory(newCategory));
  } catch (e) {
    console.log(e);
  }
}

function* watchLoadCategory(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(loadCategory.type, loadCategorySaga);
}

export default function* categorySaga(): Generator<any> {
  yield watchLoadCategory();
}
