import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchCaseStudiesRequest,
  fetchCaseStudiesSuccess,
  fetchCaseStudiesFailure,
} from '@/store/slices/caseStudiesSlice';
import type { CaseStudy } from '@/store/slices/caseStudiesSlice';
import { fetchCaseStudiesApi } from '@/lib/mockApi';

function* fetchCaseStudiesSaga() {
  try {
    const items: CaseStudy[] = (yield call(fetchCaseStudiesApi)) as CaseStudy[];
    yield put(fetchCaseStudiesSuccess(items));
  } catch (e) {
    yield put(
      fetchCaseStudiesFailure(e instanceof Error ? e.message : 'Failed to load case studies')
    );
  }
}

export function* caseStudiesSaga() {
  yield takeLatest(fetchCaseStudiesRequest.type, fetchCaseStudiesSaga);
}
