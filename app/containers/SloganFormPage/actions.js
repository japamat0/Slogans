/**
 * Add Slogan Form page actions
 */
import {
  CHANGE_SLOGAN,
  SUBMIT_SLOGAN,
  SUBMIT_SLOGAN_SUCCESS,
  SUBMIT_SLOGAN_ERROR,
} from './constants';

export const changeSlogan = slogan => ({
  type: CHANGE_SLOGAN,
  slogan,
});

export const submitSlogan = slogan => ({
  type: SUBMIT_SLOGAN,
  slogan,
});

export const submitSloganSuccess = slogan => ({
  type: SUBMIT_SLOGAN_SUCCESS,
  slogan,
});

export const submitSloganError = error => ({
  type: SUBMIT_SLOGAN_ERROR,
  error,
});
