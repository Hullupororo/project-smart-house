import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const initialState = { fetching: true };

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

export const userLogin = (inputs, navigate) => (dispatch) => {
  axios.post('http://localhost:3001/user/authorization', inputs)
    .then((res) => {
      if (res.data.error) {
        dispatch(setUser({ ...res.data, fetching: false }));
      } else {
        dispatch(setUser({ ...res.data, fetching: false }));
        navigate('/');
      }
    })
    .catch(() => dispatch(setUser({ error: 'Incorrect email or password', fetching: false })));
};
export const userSignUp = (inputs, navigate) => (dispatch) => {
  axios.post('http://localhost:3001/user/registration', inputs)
    .then((res) => {
      if (res.data.error) {
        dispatch(setUser({ ...res.data, fetching: false }));
      } else {
        try {
          dispatch(setUser({ ...res.data, fetching: false }));
          navigate('/');
        } catch (e) {
          console.log(e);
        }
      }
    })
    .catch(() => dispatch(setUser({ error: 'Incorrect email or password', fetching: false })));
};
export const userLogout = () => (dispatch) => {
  axios.get('http://localhost:3001/user/logout')
    .then(() => dispatch(setUser({})));
};
export const userCheck = () => (dispatch) => {
  axios.post('http://localhost:3001/user/check')
    .then((res) => dispatch(setUser({ ...res.data, fetching: false })));
};
