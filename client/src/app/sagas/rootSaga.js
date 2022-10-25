import { all } from 'redux-saga/effects';
import searchSagaWatcher from './searchSaga';

export default function* rootSaga() {
  yield all([
    searchSagaWatcher(),
  ]);
}
