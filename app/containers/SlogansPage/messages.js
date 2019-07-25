/*
 * Slogans Messages
 *
 * This contains all the text for the Slogans container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.Slogans';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Check out these cool slogans',
  },
  showFavorites: {
    id: `${scope}.show-favorites`,
    defaultMessage: `Show Favorites: `,
  },
  hideFavorites: {
    id: `${scope}.show-favorites`,
    defaultMessage: `Hide Favorites: `,
  },
});
