import { call, put, takeEvery } from "redux-saga/effects";
import { registerUser, loginUser, getUser, signupWithGoogle, loginWithGoogle} from "../api/auth"
import { login, storeUser } from "../slices/loginSlice"
import { AnyRecord } from "dns";
/*
const fetchUser = () => {};

  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.

function* mySaga() {
    yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
  }

  export default mySaga;
*/

function * setUser ({ payload }: any): Generator<any> {
  try {
    const user = yield call(getUser, payload);

    yield put(storeUser(user));
    yield put(login());
  } catch (error) {
    console.log(error);
  }
}

function * authenticateUser ({ payload }: any): Generator<any> {
  try {
    yield call(loginUser, payload.loginPassword, payload.rememberUser, payload.loginEmail);

    yield put(login());
  } catch (error) {
    console.log(error);
  }
}

function * signupGoogleUserGenerator (): Generator<any> {
  try {
    yield call(signupWithGoogle);
  } catch (error) {
    console.log(error);
  }
}

function * loginGoogleUserGenerator (): Generator<any> {
  try {
    yield call(loginWithGoogle);
  } catch (error) {
    console.log(error);
  }
}

function * registerSaga (): Generator<any> {
  yield takeEvery("LOGIN_USER", authenticateUser);
  yield takeEvery("STORE_USER", setUser);
  yield takeEvery("SIGNUP_GOOGLE_USER", signupGoogleUserGenerator);
  yield takeEvery("LOGIN_GOOGLE_USER", loginGoogleUserGenerator);
}

export default registerSaga;
