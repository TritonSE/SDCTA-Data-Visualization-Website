import { createSlice } from "@reduxjs/toolkit";
import { type RootState } from "../app/store";

export interface User {
  username: string;
  email: string;
  compName?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface LoginState {
  value: boolean;
  user: User | null;
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
    storeUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

export const { login, logout, storeUser } = loginSlice.actions;

export const selectLogin = (state: RootState): boolean => state.login.value;

export const getUser = (state: RootState): User | null => state.login.user;

export default loginSlice.reducer;
