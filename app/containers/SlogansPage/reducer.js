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
  UPDATE_VIEW_SLOGANS_SUCCESS,
  UPDATE_REQ_PARAMS,
} from './constants';

export const initialState = {
  error: false,
  loading: true,
  slogans: [],
  favoritedSlogans: [],
  total: 0,
  showFavorites: false,
  reqOffset: 0,
  reqLimit: 100,
  viewOffset: 0,
  viewLimit: 10,
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
        draft.slogans = [...state.slogans, ...action.slogans];
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

      case UPDATE_VIEW_SLOGANS_SUCCESS:
        draft.viewOffset = action.offset;
        break;

      case UPDATE_REQ_PARAMS:
        draft.reqOffset = action.reqOffset;
        break;
    }
  });

export default slogansReducer;
