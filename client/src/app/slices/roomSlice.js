import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const roomSlice = createSlice({
  name: 'oneLoc',
  initialState,
  reducers: {
    setRoom(state, action) {
      return action.payload;
    },

  },
});

export const { setRoom } = roomSlice.actions;
export default roomSlice.reducer;

export const getRoom = (id) => (dispatch) => {
  axios.get(`http://localhost:3001/locations/${id}`)
    .then((res) => dispatch(setRoom(res.data)));
};
