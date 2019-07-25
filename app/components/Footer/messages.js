/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Footer';

export default defineMessages({
  licenseMessage: {
    id: `${scope}.license.message`,
    defaultMessage: 'This project is licensed under the MIT license.',
  },
  builtBy: {
    id: `${scope}.author.message`,
    defaultMessage: `
      Built by Jason Matthias. {repo}.
    `,
  },
  testDataMsg: {
    id: `${scope}.test-data.message`,
    defaultMessage: `
      Mock data generated from {source}.
    `,
  },
});
