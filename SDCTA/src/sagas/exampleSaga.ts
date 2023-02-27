import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// The following is an example of a worker saga from https://redux-saga.js.org/docs/introduction/GettingStarted
// We will import the appropriate API functions that call our backend here and then use them in the Saga.
// Note that in our case, we don't explicitly create the action type names since they are created for us by Redux toolkit
// An action type can be obtained by calling the action creator and appending .type Ex: long().type

// import Api from '...'

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchUser(action) {
//   try {
//     const user = yield call(Api.fetchUser, action.payload.userId)
//     yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
//   } catch (e) {
//     yield put({ type: 'USER_FETCH_FAILED', message: e.message })
//   }
// }

const fetchUser = () => {};

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export default mySaga;
