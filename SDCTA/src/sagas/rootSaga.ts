import { all } from 'redux-saga/effects';
import categorySaga from "./categorySaga"; // Import your saga file(s)

function* rootSaga() {
  yield all([
    categorySaga(),
    // Add other sagas here if needed
  ]);
}

export default rootSaga;