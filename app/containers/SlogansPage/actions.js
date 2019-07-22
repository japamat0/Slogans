/*
 *
 * Slogans actions
 *
 */

import {
  FETCH_SLOGANS,
  FETCH_SLOGANS_SUCCESS,
  FETCH_SLOGANS_ERROR,
} from './constants';

export const fetchSlogans = (offset, limit) => ({
  type: FETCH_SLOGANS,
  offset,
  limit,
});

export const fetchSlogansSuccess = (slogans, total) => ({
  type: FETCH_SLOGANS_SUCCESS,
  slogans,
  total,
});

export const fetchSlogansError = errors => ({
  type: FETCH_SLOGANS_ERROR,
  errors,
});
