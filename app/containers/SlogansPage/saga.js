import { takeEvery, call, put, all } from 'redux-saga/effects';
import {
  FETCH_SLOGANS,
  FAVORITE_SLOGAN,
  UPDATE_VIEW_SLOGANS,
} from './constants';
import {
  fetchSlogansSuccess,
  fetchSlogansError,
  favoriteSloganSuccess,
  favoriteSloganError,
  updateViewSlogansSuccess,
  updateReqParams,
} from './actions';
import request from '../../utils/request';

const BASE_URL = `http://localhost:3000`;

/** WORKER SAGAS */
export function* getSlogansWorker(action) {
  const { offset, limit } = action;
  const endpoint = `slogans?offset=${offset}&limit=${limit}`;
  const requestURL = `${BASE_URL}/api/${endpoint}`;

  try {
    const response = yield call(request, requestURL);
    yield put(fetchSlogansSuccess(response.slogans, response.total));
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

export function* updateViewSlogansWorker(action) {
  const { offset, limit } = action;
  const { reqOffset, reqLimit } = action.reqParams;
  try {
    yield put(updateViewSlogansSuccess(offset, limit));
    // If view limit is approaching end of slogans retrieved from last request
    if (offset + limit * 2 >= reqOffset + reqLimit) {
      yield* getSlogansWorker({
        offset: reqOffset + reqLimit,
        limit: reqLimit,
      });
      yield put(updateReqParams(reqOffset + reqLimit));
    }
  } catch (error) {
    throw new Error('Error occured while trying to update the view slogans');
  }
}

/** WATCHER SAGAS */
export function* getSlogansWatcher() {
  yield takeEvery(FETCH_SLOGANS, getSlogansWorker);
}

export function* favoriteSlogansWatcher() {
  yield takeEvery(FAVORITE_SLOGAN, favoriteSloganWorker);
}

export function* updateViewSlogansWatcher() {
  yield takeEvery(UPDATE_VIEW_SLOGANS, updateViewSlogansWorker);
}

/** ROOT SAGA */

export default function* rootSloganSaga() {
  yield all([
    getSlogansWatcher(),
    favoriteSlogansWatcher(),
    updateViewSlogansWatcher(),
  ]);
}
