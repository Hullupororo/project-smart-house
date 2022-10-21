import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },

  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

export const userLogin = (inputs) => (dispatch) => {
  axios.post('http://localhost:3001/user/authorization', inputs)
    .then((res) => dispatch(setUser(res.data)));
};
export const userSignUp = (inputs) => (dispatch) => {
  axios.post('http://localhost:3001/user/registration', inputs)
    .then((res) => dispatch(setUser(res.data)));
};
export const userLogout = () => (dispatch) => {
  axios.get('http://localhost:3001/user/logout')
    .then(() => dispatch(setUser({})));
};
export const userCheck = () => (dispatch) => {
  axios.post('http://localhost:3001/user/check')
    .then((res) => dispatch(setUser(res.data)));
};
