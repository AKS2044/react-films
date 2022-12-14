import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import film from './film/slice'
import filmAdmin from './filmAdmin/slice'
import filter from './filter/slice'
import login from './Auth/slice'
import userAdmin from './userAdmin/slice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    film,
    filmAdmin,
    login,
    userAdmin,
    filter,
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
