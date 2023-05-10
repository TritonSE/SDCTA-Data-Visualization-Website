import { call, put, takeEvery } from "redux-saga/effects";
import { loginUser, getUser } from "../api/auth"
import { login, storeUser, setLoginError } from "../slices/loginSlice"
import { logInErrorHandler } from "../error_handling/auth-errors";
import { useNavigate } from "react-router-dom";
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
  } catch (error: any) {
    console.log(error);
  }
}

function * authenticateUser ({ payload }: any): Generator<any> {
  const navigate = useNavigate();
  try {
    yield call(loginUser, payload.loginPassword, payload.rememberUser, payload.loginEmail);

    yield put(login());
    navigate("/");
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = yield call(logInErrorHandler, error);

      yield put(setLoginError(errorMessage));
    }
  }
}

function * registerSaga (): Generator<any> {
  yield takeEvery("LOGIN_USER", authenticateUser);
  yield takeEvery("STORE_USER", setUser);
}

export default registerSaga;
