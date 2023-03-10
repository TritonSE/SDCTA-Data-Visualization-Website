import {
  configureStore,
  type ThunkAction,
  type Action,
} from "@reduxjs/toolkit";
import loginReducer from "../slices/loginSlice";
import subscribeReducer from "../slices/subscribeSlice";
import createSagaMiddleware from "redux-saga";
import tableauReducer from "../slices/CategorySlice"

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    login: loginReducer,
    subscribe: subscribeReducer,
	changeCategory: tableauReducer,

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
