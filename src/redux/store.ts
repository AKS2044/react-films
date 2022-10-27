import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmReducer from './film/slice'
import loginReducer from './slices/loginSlice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    film: filmReducer,
    login: loginReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
