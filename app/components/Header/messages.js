/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Header';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  favorites: {
    id: `${scope}.favorites`,
    defaultMessage: 'Favorites',
  },
  brandName: {
    id: `${scope}.brandName`,
    defaultMessage: 'Slogans',
  },
  brandSlogan: {
    id: `${scope}.brandName`,
    defaultMessage: 'Buzzwordy marketing slogans!',
  },
  slogans: {
    id: `${scope}.slogans`,
    defaultMessage: 'Slogans',
    description:
      'A list of marketing slogans using buzzwords. Data generated from Mockaroo.',
  },
  addSlogans: {
    id: `${scope}.addSlogans`,
    defaultMessage: 'Add',
    description: 'Add your own custom slogans!',
  },
});
