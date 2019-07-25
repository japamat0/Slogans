/**
 *
 * FavoriteIcon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import Favorited from './Favorited';
import NotFavorited from './NotFavorited';
import StyledSVG from './StyledSVG';

function FavoriteIcon(props) {
  const { clickIcon, id, favorite, item } = props;
  return favorite ? (
    <StyledSVG onClick={() => clickIcon(id, item)}>
      <Favorited />
    </StyledSVG>
  ) : (
    <StyledSVG onClick={() => clickIcon(id, item)}>
      <NotFavorited />
    </StyledSVG>
  );
}

FavoriteIcon.propTypes = {
  clickIcon: PropTypes.func,
  id: PropTypes.string,
  item: PropTypes.string,
  favorite: PropTypes.bool,
};

export default FavoriteIcon;
