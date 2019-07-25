/*
 * SloganFormPage Messages
 *
 * This contains all the text for the SloganFormPage container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.SloganFormPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Add Your Own Slogans',
  },
  addSloganLabel: {
    id: `${scope}.add-slogan-label`,
    defaultMessage: `Add Slogan`,
  },
});
