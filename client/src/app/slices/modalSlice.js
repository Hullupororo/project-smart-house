import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = false;

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModal(state, action) {
      return action.payload;
    },
  },
});

export const { setModal } = modalSlice.actions;
export default modalSlice.reducer;
