import { takeEvery, call, put, all } from 'redux-saga/effects';
import { FETCH_SLOGANS, FAVORITE_SLOGAN } from './constants';
import {
  fetchSlogansSuccess,
  fetchSlogansError,
  favoriteSloganSuccess,
  favoriteSloganError,
} from './actions';
import request from '../../utils/request';
import history from '../../utils/history';

const BASE_URL = `http://localhost:3000`;

/** WORKER SAGAS */
export function* getSlogansWorker(action) {
  const { offset, limit } = action;
  const endpoint = `slogans?offset=${offset}&limit=${limit}`;
  const requestURL = `${BASE_URL}/api/${endpoint}`;

  try {
    const response = yield call(request, requestURL);
    yield put(fetchSlogansSuccess(response.slogans, response.total));
    history.push(`/${endpoint}`);
  } catch (error) {
    yield put(fetchSlogansError(error));
  }
}

export function* favoriteSloganWorker(action) {
  const { id, text } = action;
  try {
    yield put(favoriteSloganSuccess(id, text));
  } catch (error) {
    yield put(favoriteSloganError(error));
  }
}

/** WATCHER SAGAS */
export function* getSlogansWatcher() {
  yield takeEvery(FETCH_SLOGANS, getSlogansWorker);
}

export function* favoriteSlogansWatcher() {
  yield takeEvery(FAVORITE_SLOGAN, favoriteSloganWorker);
}

/** ROOT SAGA */

export default function* rootSloganSaga() {
  yield all([getSlogansWatcher(), favoriteSlogansWatcher()]);
}
