import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import loginReducer from '../components/Navbar/loginSlice';
import subscribeReducer from '../components/Navbar/subscribeSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    subscribe: subscribeReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
