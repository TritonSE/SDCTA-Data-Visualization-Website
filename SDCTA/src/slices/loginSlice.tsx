import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../app/store";

export interface LoginState {
  value: boolean;
  user: unknown;
}

const initialState: LoginState = {
  value: false,
  user: null,
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
    }
  },
});

export const { login, logout, storeUser } = loginSlice.actions;

export const selectLogin = (state: RootState): boolean => state.login.value;

export default loginSlice.reducer;
