/**
 *
 * Span
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const StyledSpan = styled.span`
  color: ${props => (props.theme.color ? props.theme.color : 'inherit')};
  font-size: ${props => (props.theme.fontSize ? props.theme.fontSize : '1em')};
  font-style: ${props =>
    props.theme.fontStyle ? props.theme.fontStyle : 'none'};
`;

const Span = props => (
  <ThemeProvider theme={props.theme}>
    <StyledSpan {...props} />
  </ThemeProvider>
);

Span.propTypes = {
  theme: PropTypes.object,
};

export default Span;
