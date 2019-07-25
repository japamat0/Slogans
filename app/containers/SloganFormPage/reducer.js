/*
 *
 * SloganFormPage reducer
 *
 */
import produce from 'immer';
import {
  CHANGE_SLOGAN,
  SUBMIT_SLOGAN,
  SUBMIT_SLOGAN_SUCCESS,
  SUBMIT_SLOGAN_ERROR,
} from './constants';

export const initialState = {
  sending: false,
  error: false,
  slogan: '',
  addedSlogan: null,
};

/* eslint-disable default-case, no-param-reassign */
const sloganFormPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_SLOGAN:
        draft.slogan = action.slogan;
        break;

      case SUBMIT_SLOGAN:
        draft.sending = true;
        break;

      case SUBMIT_SLOGAN_SUCCESS:
        draft.slogan = '';
        draft.addedSlogan = state.slogan;
        draft.sending = false;
        draft.error = false;
        break;

      case SUBMIT_SLOGAN_ERROR:
        draft.error = {
          message: action.error.message,
          stack: action.error.stack,
        };
        draft.sending = false;
        break;
    }
  });

export default sloganFormPageReducer;
