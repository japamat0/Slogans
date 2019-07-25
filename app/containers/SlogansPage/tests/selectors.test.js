/**
 * SlogansPage Selectors test
 */

import {
  makeSelectSlogans,
  makeSelectFavoritedSlogans,
  makeSelectShowFavorites,
  makeSelectSloganLength,
  makeSelectSloganError,
  makeSelectSloganLoading,
} from '../selectors';

describe('selectSlogan default', () => {
  const selectSlogans = makeSelectSlogans();
  it('should select the Slogans state slogans', () => {
    const slogans = [];
    const mockedState = {
      slogans: {
        slogans: [],
      },
    };
    expect(selectSlogans(mockedState)).toEqual(slogans);
  });
});

describe('selectSlogan favorited slogans', () => {
  const selectFavorites = makeSelectFavoritedSlogans();
  it('should select the slogan state', () => {
    const favoritedSlogans = {
      favoritedSlogans: [],
    };
    const mockedState = {
      slogans: {
        favoritedSlogans,
      },
    };

    expect(selectFavorites(mockedState)).toEqual(favoritedSlogans);
  });
});

describe('selectSlogan show favorites', () => {
  const selectShowFavorites = makeSelectShowFavorites();
  it('should select the slogan state showFavorites', () => {
    const showFavorites = false;
    const mockedState = {
      slogans: {
        showFavorites,
      },
    };

    expect(selectShowFavorites(mockedState)).toEqual(showFavorites);
  });
});

describe('selectSlogan show total number of slogans', () => {
  const selectTotalSlogans = makeSelectSloganLength();
  it('should select the slogan state total slogans', () => {
    const totalSlogans = 0;
    const mockedState = {
      slogans: {
        total: totalSlogans,
      },
    };

    expect(selectTotalSlogans(mockedState)).toEqual(totalSlogans);
  });
});

describe('selectSlogan select errors', () => {
  const selectSloganError = makeSelectSloganError();
  it('should select the slogan state error', () => {
    const error = false;
    const mockedState = {
      slogans: {
        error,
      },
    };

    expect(selectSloganError(mockedState)).toEqual(error);
  });
});

describe('selectSlogan show total number of slogans', () => {
  const selectLoadingSlogans = makeSelectSloganLoading();
  it('should select the slogan state total slogans', () => {
    const loading = false;
    const mockedState = {
      slogans: {
        loading,
      },
    };

    expect(selectLoadingSlogans(mockedState)).toEqual(loading);
  });
});
