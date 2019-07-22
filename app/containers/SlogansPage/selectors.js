import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the slogans state domain
 */

const selectSlogans = state => state.slogans || initialState;

/**
 * Supplementary selectors
 */

const makeSelectFavoritedSlogans = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.favoritedSlogans,
  );

const makeSelectSloganLength = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.total,
  );

/**
 * Default selector used by Slogans
 */

const makeSelectSlogans = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.slogans,
  );

export {
  selectSlogans,
  makeSelectFavoritedSlogans,
  makeSelectSlogans,
  makeSelectSloganLength,
};
