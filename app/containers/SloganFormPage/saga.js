import { takeEvery, select, call, put, all } from 'redux-saga/effects';
import { SUBMIT_SLOGAN } from './constants';
import { submitSloganSuccess, submitSloganError } from './actions';
import request from '../../utils/request';
import { makeSelectSloganInput } from './selectors';

const BASE_URL = `http://localhost:3000`;

/** WORKER SAGAS */
function* submitSlogansWorker() {
  // Get slogan from store;
  const text = yield select(makeSelectSloganInput());
  const body = {
    slogan: {
      text,
    },
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
  const requestURL = `${BASE_URL}/api/slogans`;

  try {
    const response = yield call(request, requestURL, options);
    yield put(submitSloganSuccess(response.slogans));
  } catch (error) {
    yield put(submitSloganError(error));
  }
}

/** WATCHER SAGAS */
function* submitSlogansWatcher() {
  yield takeEvery(SUBMIT_SLOGAN, submitSlogansWorker);
}

/** ROOT SAGA */

export default function* rootSloganSaga() {
  yield all([submitSlogansWatcher()]);
}
