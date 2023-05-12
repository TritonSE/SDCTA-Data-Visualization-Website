import { createSlice } from '@reduxjs/toolkit';
import { RootState,  } from '../../app/store';

export interface SubscribeState {
  value: boolean;
}

const initialState: SubscribeState = {
  value: false,
};

export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState,
  reducers: {
    subscribe: (state) => {

      state.value = true;
    },
    unsubscribe: (state) => {
      state.value = false;
    },
  },
});

export const { subscribe, unsubscribe } = subscribeSlice.actions;

export const selectSubscribe = (state: RootState): boolean =>
  state.subscribe.value;

export default subscribeSlice.reducer;
