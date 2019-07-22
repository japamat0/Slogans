/**
 *
 * Asynchronously loads the component for Paginator
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
