import {configureStore, Middleware} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';
import rootReducer from './reducers';

const middleware: Middleware[] = [];

if (__DEV__) {
  //&& !process.env.JEST_WORKER_ID
  // middleware.push(createDebugger());
}

export const rootStore = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
