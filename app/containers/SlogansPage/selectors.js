import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the slogans state domain
 */

const selectSlogans = state => state.slogans || initialState;

/**
 * Supplementary selectors
 */

// Makes an array of all the slogans in state
const makeSelectSlogansArr = () =>
  createSelector(
    [selectSlogans, makeSelectApiParams()],
    (slogans, params) => {
      const { viewOffset, viewLimit } = params;
      return slogans.slogans.slice(viewOffset, viewOffset + viewLimit);
    },
  );

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

const makeSelectApiParams = () =>
  createSelector(
    selectSlogans,
    sloganState => ({
      reqOffset: sloganState.reqOffset,
      reqLimit: sloganState.reqLimit,
      viewOffset: sloganState.viewOffset,
      viewLimit: sloganState.viewLimit,
    }),
  );

/**
 * Default selector used by Slogans, if is favorited, add favorite key to slogan
 */

const makeSelectSlogans = () =>
  createSelector(
    [makeSelectSlogansArr(), makeSelectFavoritedSlogans()],
    (slogans, favorites) =>
      slogans.map(slogan =>
        favorites.some(fave => fave.id === slogan.id)
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
  makeSelectSlogansArr,
  makeSelectApiParams,
};
