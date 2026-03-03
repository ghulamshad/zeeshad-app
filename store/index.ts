import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import contactReducer from './slices/contactSlice';
import caseStudiesReducer from './slices/caseStudiesSlice';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    contact: contactReducer,
    caseStudies: caseStudiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
