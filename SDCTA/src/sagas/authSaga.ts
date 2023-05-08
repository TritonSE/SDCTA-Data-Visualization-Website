import { call, put, takeEvery } from "redux-saga/effects";
import { loginUser } from "../api/auth"
import { login } from "../slices/loginSlice"
/*
const fetchUser = () => {};

  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  }

  export default mySaga;
*/
function * authenticateUser ({ payload }: any): Generator<any> {
  try {
    console.log("auth");
    console.log(payload);
    yield call(loginUser, payload.loginPassword, payload.rememberUser, payload.loginEmail);

    yield put(login());
  } catch (error) {
    console.log(error);
  }
}

function * registerSaga (): Generator<any> {
  yield takeEvery("LOGIN_USER", authenticateUser);
}

export default registerSaga;
