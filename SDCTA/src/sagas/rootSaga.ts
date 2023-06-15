import { all } from 'redux-saga/effects';
import categorySaga from "./categorySaga"; // Import your saga file(s)
import registerSaga from "../sagas/authSaga";

// add all Sagas here to ensure they run

function* rootSaga() {
  yield all([
    categorySaga(),
    // Add other sagas here if needed
    registerSaga(),
  ]);
}

export default rootSaga;