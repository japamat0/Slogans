import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const StyledLabel = styled.label`
  color: ${props => (props.theme.color ? props.theme.color : '#000')};
  font-family: ${props =>
    props.theme.font
      ? props.theme.font
      : `'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif`};
`;

function Label(props) {
  return props.theme ? (
    <ThemeProvider theme={props.theme}>
      <StyledLabel {...props} />
    </ThemeProvider>
  ) : (
    <StyledLabel {...props} />
  );
}

Label.propTypes = {
  theme: PropTypes.object,
};

export default Label;
