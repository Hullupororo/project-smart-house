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
    addLoc(state, action) {
      return [...state, action.payload];
    },
    deleteLoc(state, action) {
      return state.filter((el) => el.id !== Number(action.payload));
    },
  },
});

export const {
  setLoc, addLoc, deleteLoc,
} = locSlice.actions;
export default locSlice.reducer;

export const getLoc = () => (dispatch) => {
  axios.get('http://localhost:3001/locations')
    .then((res) => dispatch(setLoc(res.data)));
};

export const addLocation = (inputPro) => (dispatch) => {
  axios.post('http://localhost:3001/api/newLocation', inputPro)
    .then((res) => dispatch(addLoc(res.data)));
};

export const deleteLocation = (loc) => (dispatch) => {
  axios.delete(`http://localhost:3001/api/locations/delete/${loc.id}`)
    .then((res) => dispatch(deleteLoc(res.data)));
};
