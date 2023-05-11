import { call, put, takeEvery } from "redux-saga/effects";
import { login, storeUser, setLoginError, setSignUpError, logout } from "../slices/loginSlice"
import { logInErrorHandler, signUpErrorHandler } from "../error_handling/auth-errors";
import { auth } from "../firebase-config";
import { deleteUser } from "firebase/auth";
import { register, loginUser, getUser, signupWithGoogle, loginWithGoogle } from "../api/auth"
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
  try {
    yield call(loginUser, payload.loginPassword, payload.rememberUser, payload.loginEmail);

    yield put(login());
    payload.navigate("/");
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = yield call(logInErrorHandler, error);

      yield put(setLoginError(errorMessage));
    }
  }
}

function * registerUser ({ payload }: any): Generator<any> {
  try {
    yield call(
      register,
      payload.userDisplayName,
      payload.registerEmail,
      payload.agreedTerms,
      payload.registerPassword,
      payload.confirmPassword
    );
    yield put({ type: "STORE_USER", payload: payload.registerEmail });
    payload.navigate("/");
  } catch (error) {
    if (error instanceof Error) {
      const errorMessage = yield call(signUpErrorHandler, error);
      if (auth.currentUser != null) {
        yield call(deleteUser, auth.currentUser);
        yield put(logout());
      }
      yield put(setSignUpError(errorMessage));
    }
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
  yield takeEvery("REGISTER_USER", registerUser);
  yield takeEvery("SIGNUP_GOOGLE_USER", signupGoogleUserGenerator);
  yield takeEvery("LOGIN_GOOGLE_USER", loginGoogleUserGenerator);
}

export default registerSaga;
