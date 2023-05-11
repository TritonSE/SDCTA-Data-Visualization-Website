import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../app/store";
import { type LoginError, type SignUpError } from "../error_handling/auth-errors"

export interface LoginState {
  value: boolean;
  user: any;
  loginError: LoginError;
  signUpError: SignUpError;
}

const initialState: LoginState = {
  value: false,
  user: null,
  loginError: {
    emailError: "",
    passwordError: "",
    unknownError: ""
  },
  signUpError: {
    unknownError: "",
    passwordError: "",
    confirmError: "",
    emailError: "",
    nameError: "",
  }
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
      state.user = null;
    },
    storeUser: (state, action) => {
      state.user = action.payload;
    },
    setLoginError: (state, action) => {
      state.loginError = action.payload;
    },
    setSignUpError: (state, action) => {
      state.signUpError = action.payload;
    }
  },
});

export const { login, logout, storeUser, setLoginError, setSignUpError } = loginSlice.actions;

export const selectLogin = (state: RootState): boolean => state.login.value;

export const selectLoginError = (state: RootState): LoginError => state.login.loginError;

export const selectSignUpError = (state: RootState): SignUpError => state.login.signUpError;

export const selectUser = (state: RootState): any => state.login.user;

export default loginSlice.reducer;
