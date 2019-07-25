/*
 *
 * Slogans reducer
 *
 */
import produce from 'immer';
import {
  FETCH_SLOGANS_SUCCESS,
  FAVORITE_SLOGAN_SUCCESS,
  FETCH_SLOGANS_ERROR,
  FETCH_SLOGANS,
  FAVORITE_SLOGAN_ERROR,
  TOGGLE_SHOW_FAVORITES,
} from './constants';

export const initialState = {
  error: false,
  loading: false,
  slogans: [],
  favoritedSlogans: [],
  total: 0,
  showFavorites: false,
};

/* eslint-disable default-case, no-param-reassign */
const slogansReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SLOGANS:
        draft.loading = true;
        draft.error = false;
        break;

      case FETCH_SLOGANS_SUCCESS:
        draft.slogans = action.slogans;
        draft.total = action.total;
        draft.loading = false;
        break;

      case FETCH_SLOGANS_ERROR:
        draft.loading = false;
        draft.error = {
          message: action.error.message,
          stack: action.error.stack,
        };
        break;

      case FAVORITE_SLOGAN_SUCCESS:
        // Check to see if its in favorites already
        //  if its in favorited, remove it
        if (draft.favoritedSlogans.some(slogan => slogan.id === action.id)) {
          draft.favoritedSlogans = state.favoritedSlogans.filter(
            slogan => slogan.id !== action.id,
          );
        } else {
          // otherwise, add it to favorited
          draft.favoritedSlogans = [
            ...draft.favoritedSlogans,
            { id: action.id, text: action.text, favorite: true },
          ];
        }
        break;

      case FAVORITE_SLOGAN_ERROR:
        draft.error = {
          message: action.error.message,
          stack: action.error.stack,
        };
        break;

      case TOGGLE_SHOW_FAVORITES:
        draft.showFavorites = !state.showFavorites;
        break;
    }
  });

export default slogansReducer;
