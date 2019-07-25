/*
 *
 * Slogans actions
 *
 */

import {
  FETCH_SLOGANS,
  FETCH_SLOGANS_SUCCESS,
  FETCH_SLOGANS_ERROR,
  FAVORITE_SLOGAN,
  FAVORITE_SLOGAN_SUCCESS,
  FAVORITE_SLOGAN_ERROR,
  TOGGLE_SHOW_FAVORITES,
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

export const fetchSlogansError = error => ({
  type: FETCH_SLOGANS_ERROR,
  error,
});

export const favoriteSlogan = (id, text) => ({
  type: FAVORITE_SLOGAN,
  id,
  text,
});

export const favoriteSloganSuccess = (id, text) => ({
  type: FAVORITE_SLOGAN_SUCCESS,
  id,
  text,
});

export const favoriteSloganError = error => ({
  type: FAVORITE_SLOGAN_ERROR,
  error,
});

export const toggleFavorites = () => ({
  type: TOGGLE_SHOW_FAVORITES,
});
