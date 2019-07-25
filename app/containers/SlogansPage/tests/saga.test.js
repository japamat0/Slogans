/**
 * Test SlogansPage sagas
 */

import { call, put, takeEvery } from 'redux-saga/effects';
import assert from 'assert';
import {
  FETCH_SLOGANS,
  FAVORITE_SLOGAN_SUCCESS,
  FAVORITE_SLOGAN,
} from '../constants';
import {
  getSlogansWorker,
  favoriteSloganWorker,
  getSlogansWatcher,
  favoriteSlogansWatcher,
} from '../saga';
import request from '../../../utils/request';

describe('getSlogansWorker Saga', () => {
  const generator = getSlogansWorker({ offset: 0, limit: 2 });
  it('should return the call to the get slogans api', () => {
    assert.deepEqual(
      generator.next().value,
      call(request, 'http://localhost:3000/api/slogans?offset=0&limit=2'),
    );
  });
});

describe('favoriteSloganWorker Saga', () => {
  const generator = favoriteSloganWorker({ id: 0, text: 'test slogan' });
  it('should dispatch a put favoriteSloganSuccess action', () => {
    assert.deepEqual(
      generator.next().value,
      put({ type: FAVORITE_SLOGAN_SUCCESS, id: 0, text: 'test slogan' }),
    );
  });
});

describe('getSlogansWatcher Saga', () => {
  const generator = getSlogansWatcher();

  it('should start task for FETCH_SLOGANS action', () => {
    const takeEveryDescriptor = generator.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(FETCH_SLOGANS, getSlogansWorker),
    );
  });
});

describe('favoriteSloganWatcher Saga', () => {
  const generator = favoriteSlogansWatcher();

  it('should start task for FAVORITE_SLOGAN action', () => {
    const takeEveryDescriptor = generator.next().value;
    expect(takeEveryDescriptor).toEqual(
      takeEvery(FAVORITE_SLOGAN, favoriteSloganWorker),
    );
  });
});
