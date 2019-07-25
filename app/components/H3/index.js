import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const StyledH3 = styled.h3`
  text-align: ${props => (props.centered ? 'center' : 'auto')};
  color: ${props => (props.theme.color ? props.theme.color : '#000')};
`;

function H3(props) {
  return props.theme ? (
    <ThemeProvider theme={props.theme}>
      <StyledH3 {...props} />
    </ThemeProvider>
  ) : (
    <StyledH3 {...props} />
  );
}

H3.propTypes = {
  theme: PropTypes.object,
};

export default H3;
