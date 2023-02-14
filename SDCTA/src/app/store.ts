import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

import loginReducer from '../components/Navbar/loginSlice';
import subscribeReducer from '../components/Navbar/subscribeSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    subscribe: subscribeReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(middleware),
});

// Then run the saga
// sagaMiddleware.run(mySaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
