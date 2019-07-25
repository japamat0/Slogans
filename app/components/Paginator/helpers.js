/**
 * Helper functions for Paginator component
 */
import React from 'react';

import PageNumber from '../PageNumber';
import { isMobile } from '../../utils/checkMobile';

const getPageBounds = (total, offset, limit) => {
  const totalPages = Math.floor(total / limit);
  let lower = Math.floor(offset / limit + 1) - 4;
  let upper = Math.floor(offset / limit + 1) + 4;
  if (lower <= 0) {
    lower = 1;
    upper = 9;
  } else if (upper > totalPages) {
    lower = totalPages - 8;
    upper = totalPages;
  }
  return { lower, upper };
};

export const pagesToShow = (total, offset, limit, onClick, theme) => {
  if (isMobile()) {
    return (
      <div>
        <PageNumber
          disabled
          color={theme.bg}
          number={Math.floor(offset / limit + 1)}
          key={`page-number-${Math.floor(offset / limit + 1)}`}
        />
        /
        <PageNumber
          disabled
          color={theme.bg}
          number={Math.floor(total / limit)}
          key="page-number-max-apges"
        />
      </div>
    );
  }
  const pageNumbers = [];
  const { lower, upper } = getPageBounds(total, offset, limit);
  for (let i = lower; i < upper + 1; i += 1) {
    pageNumbers.push(
      <PageNumber
        onClick={() => onClick((i - 1) * limit, limit)}
        color={theme.bg}
        number={i}
        active={Math.floor(offset / limit) + 1 === i}
        key={`page-number-${i / limit}`}
      />,
    );
  }
  return pageNumbers;
};
