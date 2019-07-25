import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the sloganFormPage state domain
 */

const selectSloganFormPageDomain = state =>
  state.sloganFormPage || initialState;

/**
 * Additional selectors
 */

const makeSelectAddedSlogan = () =>
  createSelector(
    selectSloganFormPageDomain,
    sloganState => sloganState.addedSlogan,
  );

const makeSelectSloganSending = () =>
  createSelector(
    selectSloganFormPageDomain,
    sloganState => sloganState.sending,
  );

const makeSelectSloganError = () =>
  createSelector(
    selectSloganFormPageDomain,
    sloganState => sloganState.error,
  );

/**
 * Default selector used by SloganFormPage
 */

const makeSelectSloganInput = () =>
  createSelector(
    selectSloganFormPageDomain,
    sloganState => sloganState.slogan,
  );

export {
  selectSloganFormPageDomain,
  makeSelectSloganInput,
  makeSelectAddedSlogan,
  makeSelectSloganSending,
  makeSelectSloganError,
};
