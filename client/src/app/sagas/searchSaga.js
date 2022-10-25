import {
  call, put, takeEvery, takeLatest, delay, throttle,
} from 'redux-saga/effects';
import axios from 'axios';
import { setLoc } from '../slices/locSlice';
import { GET_SEARCH } from '../types/types';

const getSearch = (input) => axios.post('http://localhost:3001/locations/search', { input });

function* searchSagaWorker(action) {
  console.log('from saga', action);
  //   yield delay(1000);
  try {
    const search = yield call(getSearch, action.payload);
    yield put(setLoc(search.data));
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

function* searchSagaWatcher() {
  yield takeLatest(GET_SEARCH, searchSagaWorker);
}

export default searchSagaWatcher;
