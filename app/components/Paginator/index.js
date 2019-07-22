/**
 *
 * Paginator
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import Wrapper from './Wrapper';
import Button from '../Button';
import PageNumber from '../PageNumber';

function Paginator(props) {
  const { total, offset, limit, onClick, theme } = props;

  const buttons = [];
  for (let i = 0; i < total - limit + 1; i += limit) {
    buttons.push(
      <PageNumber
        onClick={() => onClick(i, limit)}
        color={theme.background}
        number={i / limit}
        active={offset === i}
        key={`page-number-${i / limit}`}
      />,
    );
  }
  // return buttons;
  // const makeIndexButtons = () => {
  // };

  return (
    /**
     * arrow left and arrow right on ends, which move offset by step
     * map of buttons in the middle
     */
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Button
          disabled={offset === 0}
          handleRoute={() => onClick(offset - limit, limit)}
        >
          back
        </Button>
        {buttons}
        <Button
          disabled={offset >= total - limit}
          handleRoute={() => onClick(offset + limit, limit)}
        >
          next
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

Paginator.propTypes = {
  total: PropTypes.number.isRequired,
  offset: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  theme: PropTypes.object,
};

export default Paginator;
