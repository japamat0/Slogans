import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const StyledH1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
  text-align: ${props => (props.centered ? 'center' : 'auto')};
  color: ${props => (props.theme.color ? props.theme.color : '#000')};
`;

function H1(props) {
  return props.theme ? (
    <ThemeProvider theme={props.theme}>
      <StyledH1 {...props} />
    </ThemeProvider>
  ) : (
    <StyledH1 {...props} />
  );
}

H1.propTypes = {
  theme: PropTypes.object,
};

export default H1;
