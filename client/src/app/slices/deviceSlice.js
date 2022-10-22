import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = [];

const rdeviceSlice = createSlice({
  name: 'oneLoc',
  initialState,
  reducers: {
    setDevice(state, action) {
      return action.payload;
    },

  },
});

export const { setDevice } = rdeviceSlice.actions;
export default rdeviceSlice.reducer;

export const getDevice = (id) => (dispatch) => {
  axios.get(`http://localhost:3001/device/${id}`)
    .then((res) => dispatch(setDevice(res.data)));
};
