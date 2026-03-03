import { all } from 'redux-saga/effects';
import { contactSaga } from './contactSaga';
import { caseStudiesSaga } from './caseStudiesSaga';

export default function* rootSaga() {
  yield all([contactSaga(), caseStudiesSaga()]);
}
