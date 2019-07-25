import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const StyledH2 = styled.h2`
  font-size: 1.5em;
  text-align: ${props => (props.centered ? 'center' : 'auto')};
  color: ${props => (props.theme.color ? props.theme.color : '#000')};
`;

function H2(props) {
  return props.theme ? (
    <ThemeProvider theme={props.theme}>
      <StyledH2 {...props} />
    </ThemeProvider>
  ) : (
    <StyledH2 {...props} />
  );
}

H2.propTypes = {
  theme: PropTypes.object,
};

export default H2;
