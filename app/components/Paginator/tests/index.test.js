/**
 *
 * Tests for Paginator
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import Paginator from '../index';
import { DEFAULT_LOCALE } from '../../../i18n';

describe('<Paginator />', () => {
  const clickFn = () => {};
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Paginator onCLick={clickFn} theme={{}} />
      </IntlProvider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale={DEFAULT_LOCALE}>
        <Paginator onCLick={clickFn} theme={{}} />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
