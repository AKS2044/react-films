import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import filmReducer from './slices/filmSlice'

export const store = configureStore({
  reducer: {
    film: filmReducer,
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
