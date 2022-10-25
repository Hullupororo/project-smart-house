import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = false;

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setState(state, action) {
      return !state;
    },

  },
});

export const { setState } = stateSlice.actions;
export default stateSlice.reducer;
