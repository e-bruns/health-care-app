import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import shareReducer from '../features/shareSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    share: shareReducer
  },
});
