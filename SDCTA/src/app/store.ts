import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
<<<<<<< HEAD
import loginReducer from '../components/Navbar/loginSlice';
import subscribeReducer from '../components/Navbar/subscribeSlice';
import createSagaMiddleware from '@redux-saga/core';
import { tableauReducer } from "../slices/CategorySlice";
=======
import loginReducer from '../slices/loginSlice';
import subscribeReducer from '../slices/subscribeSlice';
import createSagaMiddleware from 'redux-saga'

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

>>>>>>> main

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
// uncomment when root saga is made
// sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
