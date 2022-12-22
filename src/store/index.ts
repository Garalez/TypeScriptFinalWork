import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from './userAuth/userAuthReducer';

const rootReducer = combineReducers({
  userData: authReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
