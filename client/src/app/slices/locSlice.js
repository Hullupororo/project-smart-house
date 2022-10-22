import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const locSlice = createSlice({
  name: 'loc',
  initialState,
  reducers: {
    setLoc(state, action) {
      return action.payload;
    },

  },
});

export const { setLoc } = locSlice.actions;
export default locSlice.reducer;

export const getLoc = () => (dispatch) => {
  axios.get('http://localhost:3001/locations')
    .then((res) => dispatch(setLoc(res.data)));
};
