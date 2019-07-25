import produce from 'immer';
import slogansReducer from '../reducer';
import {
  fetchSlogansSuccess,
  favoriteSloganSuccess,
  fetchSlogans,
  fetchSlogansError,
  favoriteSloganError,
  toggleFavorites,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('slogansReducer', () => {
  const slogans = [
    {
      id: '419bfcfe-21c5-43bd-ad2c-c504365f62ba',
      text: 'brand revolutionary schemas',
    },
    {
      id: 'e0cf094c-46fa-4b4c-a812-d94b5c7390ad',
      text: 'benchmark sticky eyeballs',
    },
    {
      id: '650ab1da-3927-4f9e-9c71-961963d95f31',
      text: 'expedite e-business deliverables',
    },
    {
      id: '81d4eace-26b3-41bd-847f-b434d6ace9fc',
      text: 'exploit revolutionary technologies',
    },
  ];
  let state;
  beforeEach(() => {
    state = {
      error: false,
      loading: false,
      slogans: [],
      favoritedSlogans: [],
      total: 0,
      showFavorites: false,
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(slogansReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle fetchSlogans action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.loading = true;
      draft.error = false;
    });
    expect(slogansReducer(state, fetchSlogans(0, 10))).toEqual(expectedResult);
  });

  it('should handle the fetchSlogansSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.slogans = slogans;
      draft.total = 4;
      draft.loading = false;
    });

    expect(slogansReducer(state, fetchSlogansSuccess(slogans, 4))).toEqual(
      expectedResult,
    );
  });

  it('should handle the fetchSlogansError action correctly', () => {
    const testError = new Error('test error');
    const expectedResult = produce(state, draft => {
      draft.loading = false;
      draft.error = {
        message: testError.message,
        stack: testError.stack,
      };
    });

    expect(slogansReducer(state, fetchSlogansError(testError))).toEqual(
      expectedResult,
    );
  });

  it('should handle the favoriteSloganSuccess action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.favoritedSlogans = [
        ...state.favoritedSlogans,
        { ...slogans[0], favorite: true },
      ];
    });
    expect(
      slogansReducer(
        state,
        favoriteSloganSuccess(
          '419bfcfe-21c5-43bd-ad2c-c504365f62ba',
          'brand revolutionary schemas',
        ),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the favoriteSloganError action correctly', () => {
    const testError = new Error('test error');
    const expectedResult = produce(state, draft => {
      draft.error = {
        message: testError.message,
        stack: testError.stack,
      };
    });
    expect(slogansReducer(state, favoriteSloganError(testError))).toEqual(
      expectedResult,
    );
  });

  it('should handle the toggleFavorites action correctly', () => {
    const expectedResult = produce(state, draft => {
      draft.showFavorites = true;
    });
    expect(slogansReducer(state, toggleFavorites())).toEqual(expectedResult);
  });
});
