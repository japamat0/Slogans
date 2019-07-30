/**
 *
 * Paginator
 * Takes the total number of results, results offset, limit,
 * onClick function, and theme as props.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Wrapper from './Wrapper';
import Button from '../Button';
import ArrowIcon from '../ArrowIcon';
import { pagesToShow } from './helpers';

function Paginator(props) {
  const { total, onClick, theme, showPageNums } = props;
  const { reqOffset, reqLimit, viewOffset, viewLimit } = props.apiParams;
  const reqParams = { reqOffset, reqLimit };
  const pageNums = showPageNums
    ? pagesToShow(total, viewOffset, viewLimit, onClick, theme)
    : null;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button
          disabled={viewOffset === 0}
          handleRoute={() =>
            onClick(Math.max(0, viewOffset - viewLimit), viewLimit, reqParams)
          }
        >
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </Button>
        {pageNums}
        <Button
          disabled={viewOffset >= total - viewLimit}
          handleRoute={() =>
            onClick(viewOffset + viewLimit, viewLimit, reqParams)
          }
        >
          <ArrowIcon />
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

Paginator.propTypes = {
  total: PropTypes.number,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  apiParams: PropTypes.object,
  showPageNums: PropTypes.bool,
};

export default Paginator;
