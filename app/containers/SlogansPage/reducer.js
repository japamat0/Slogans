/*
 *
 * Slogans reducer
 *
 */
import produce from 'immer';
import { FETCH_SLOGANS_SUCCESS } from './constants';

export const initialState = {
  slogans: [],
  favoritedSlogans: [],
  total: 0,
};

/* eslint-disable default-case, no-param-reassign */
const slogansReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_SLOGANS_SUCCESS:
        draft.slogans = action.slogans;
        draft.total = action.total;
        break;
    }
  });

export default slogansReducer;
