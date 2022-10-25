import {
  GET_SEARCH, SET_SEARCH,
} from '../types/types';

export const setsearch = (payload) => ({
  type: SET_SEARCH,
  payload,
});

export const getSearchSaga = (search) => ({
  type: GET_SEARCH,
  payload: search,
});
