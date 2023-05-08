import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../app/store";

export interface LoginState {
  value: boolean;
  user: any;
}

const initialState: LoginState = {
  value: false,
  user: null
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
    },
    storeUser: (state,action) => {
      state.user = true;
    }
  },
});

export const { login, logout } = loginSlice.actions;

export const selectLogin = (state: RootState): boolean => state.login.value;

export const getUser = (state: RootState): any => state.login.user;

export default loginSlice.reducer;
