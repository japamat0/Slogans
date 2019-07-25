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
  const { total, offset, limit, onClick, theme, showPageNums } = props;
  const pageNums = showPageNums
    ? pagesToShow(total, offset, limit, onClick, theme)
    : null;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button
          disabled={offset === 0}
          handleRoute={() => onClick(Math.max(0, offset - limit), limit)}
        >
          <ArrowIcon style={{ transform: 'rotate(180deg)' }} />
        </Button>
        {pageNums}
        <Button
          disabled={offset >= total - limit}
          handleRoute={() => onClick(offset + limit, limit)}
        >
          <ArrowIcon />
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

Paginator.propTypes = {
  total: PropTypes.number,
  offset: PropTypes.number,
  limit: PropTypes.number,
  onClick: PropTypes.func,
  theme: PropTypes.object,
  showPageNums: PropTypes.bool,
};

export default Paginator;
