import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, } from '../app/store';

export interface LoginState {
  value: boolean;
  token: string;
}

const initialState: LoginState = {
  value: false,
  token: ""
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginReducer: (state, token: PayloadAction<string>) => {
      state.value = true;
      state.token = token.payload;
    },
    logoutReducer: (state) => {
      state.value = false;
      state.token = "";
    },
  },

});

export const { loginReducer, logoutReducer } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login.value;
export const selectToken = (state: RootState) => state.login.token;

export default loginSlice.reducer;
