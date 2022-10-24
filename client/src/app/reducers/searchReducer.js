/* eslint-disable default-param-last */
import { SET_SEARCH } from '../types/types';

const searchReducer = (state = '', action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SEARCH:
      console.log(payload);
      return payload;

    default:
      return state;
  }
};

export default searchReducer;
