import { all } from "redux-saga/effects";
import categorySaga from "./categorySaga"; // Import your saga file(s)
import registerSaga from "../sagas/authSaga";

// add all Sagas here to ensure they run

function* rootSaga(): Generator<any> {
  yield all([
    categorySaga(),
    // Add other sagas here if needed
    registerSaga(),
  ]);
}

export default rootSaga;
