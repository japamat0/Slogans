import { fetchSlogans } from '../actions';
import { FETCH_SLOGANS } from '../constants';

describe('Slogans actions', () => {
  describe('Fetch Slogans', () => {
    it('has a type of FETCH SLOGANS', () => {
      const expected = {
        type: FETCH_SLOGANS,
      };
      expect(fetchSlogans()).toEqual(expected);
    });
  });
});
