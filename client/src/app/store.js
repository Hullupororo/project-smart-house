import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalSlice from './slices/modalSlice';
import locReducer from './slices/locSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalSlice,
    loc: locReducer,
  },
});
