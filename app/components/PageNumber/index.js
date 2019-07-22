/**
 *
 * PageNumber
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import StyledPageNumber from './StyledPageNumber';

function PageNumber(props) {
  return <StyledPageNumber {...props}>{props.number}</StyledPageNumber>;
}

PageNumber.propTypes = {
  number: PropTypes.number.isRequired,
};

export default PageNumber;
