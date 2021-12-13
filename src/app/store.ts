import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { personSlice } from '../features/person/personSlice';

export const store = configureStore({
  reducer: {
    [personSlice.reducerPath]: personSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(personSlice.middleware),
  }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
