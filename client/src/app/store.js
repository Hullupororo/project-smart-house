import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import modalSlice from './slices/modalSlice';
import locReducer from './slices/locSlice';
import roomReducer from './slices/roomSlice';
import deviceReducer from './slices/deviceSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalSlice,
    loc: locReducer,
    room: roomReducer,
    device: deviceReducer,
  },
});
