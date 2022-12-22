import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userDataReducer } from './userData/userDataReducer';

const rootReducer = combineReducers({
  userData: userDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
