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

const makeSelectShowFavorites = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.showFavorites,
  );

const makeSelectSloganLength = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.total,
  );

const makeSelectSloganError = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.error,
  );

const makeSelectSloganLoading = () =>
  createSelector(
    selectSlogans,
    sloganState => sloganState.loading,
  );

/**
 * Default selector used by Slogans, if is favorited, add favorite key to slogan
 */

const makeSelectSlogans = () =>
  createSelector(
    selectSlogans,
    sloganState =>
      sloganState.slogans.map(slogan =>
        sloganState.favoritedSlogans.some(fave => fave.id === slogan.id)
          ? { ...slogan, favorite: true }
          : slogan,
      ),
  );

export {
  selectSlogans,
  makeSelectFavoritedSlogans,
  makeSelectSlogans,
  makeSelectSloganLength,
  makeSelectSloganError,
  makeSelectSloganLoading,
  makeSelectShowFavorites,
};
