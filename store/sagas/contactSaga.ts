import { call, put, takeLatest } from 'redux-saga/effects';
import { submitLeadRequest, submitLeadSuccess, submitLeadFailure } from '@/store/slices/contactSlice';
import { submitContactApi } from '@/lib/mockApi';

function* submitLeadSaga(
  action: ReturnType<typeof submitLeadRequest>
) {
  try {
    const form = action.payload;
    yield call(submitContactApi, form);
    yield put(submitLeadSuccess());
  } catch (e) {
    yield put(
      submitLeadFailure(e instanceof Error ? e.message : 'Failed to submit')
    );
  }
}

export function* contactSaga() {
  yield takeLatest(submitLeadRequest.type, submitLeadSaga);
}
