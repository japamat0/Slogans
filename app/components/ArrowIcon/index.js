import React from 'react';
import PropTypes from 'prop-types';

function ArrowIcon(props) {
  return (
    <svg height="24" width="24" className={props.className} {...props}>
      <path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z" />
      <path fill="none" d="M0 0h24v24H0z" />
    </svg>
  );
}

ArrowIcon.propTypes = {
  className: PropTypes.string,
};

export default ArrowIcon;
