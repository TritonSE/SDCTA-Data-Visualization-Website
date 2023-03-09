import { createSlice } from '@reduxjs/toolkit';
import { RootState,  } from '../../app/store';

export interface LoginState {
  value: boolean;
}

const initialState: LoginState = {
  value: false,
};

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login: (state) => {
      state.value = true;
    },
    logout: (state) => {
      state.value = false;
    },
  },

});

export const { login, logout } = loginSlice.actions;


export const selectLogin = (state: RootState) => state.login.value;

export default loginSlice.reducer;