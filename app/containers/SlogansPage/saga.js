import { takeEvery, call, put, all } from 'redux-saga/effects';
import { FETCH_SLOGANS } from './constants';
import { fetchSlogansSuccess } from './actions';
import request from '../../utils/request';
import history from '../../utils/history';

const BASE_URL = `http://localhost:3000`;

/** WORKER SAGAS */
function* getSlogansWorker(action) {
  const { offset, limit } = action;
  const endpoint = `slogans?offset=${offset}&limit=${limit}`;
  const requestURL = `${BASE_URL}/api/${endpoint}`;

  try {
    const response = yield call(request, requestURL);
    yield put(fetchSlogansSuccess(response.slogans, response.total));
    history.push(`/${endpoint}`);
  } catch (error) {
    throw new Error('boop');
  }
}

/** WATCHER SAGAS */
function* getSlogansWatcher() {
  yield takeEvery(FETCH_SLOGANS, getSlogansWorker);
}

export default function* rootSloganSaga() {
  yield all([getSlogansWatcher()]);
}
