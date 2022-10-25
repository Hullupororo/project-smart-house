import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './slices/userSlice';
import modalSlice from './slices/modalSlice';
import locReducer from './slices/locSlice';
import roomReducer from './slices/roomSlice';
import deviceReducer from './slices/deviceSlice';
import searchReducer from './reducers/searchReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalSlice,
    loc: locReducer,
    room: roomReducer,
    device: deviceReducer,
    search: searchReducer,
  },
  middleware: (mid) => [...mid(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
