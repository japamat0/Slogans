/**
 *
 * Slogans
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import qs from 'query-string';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {
  makeSelectSlogans,
  makeSelectSloganLength,
  makeSelectFavoritedSlogans,
  makeSelectSloganLoading,
  makeSelectSloganError,
  makeSelectShowFavorites,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { fetchSlogans, favoriteSlogan, toggleFavorites } from './actions';
import TogglerWrapper from './TogglerWrapper';
import FavoriteIcon from '../../components/FavoriteIcon';
import Paginator from '../../components/Paginator';
import SlogansList from '../../components/SlogansList';
import ListItem from '../../components/ListItem';
import Span from '../../components/Span';
import H2 from '../../components/H2';

const key = 'slogans';

export function SlogansPage(props) {
  const {
    onFravoriteSlogan,
    onFetchSlogans,
    onToggleFavorite,
    slogans,
    favorited,
    total,
    loading,
    error,
    showFavorites,
  } = props;

  const parsedQueryString = qs.parse(props.location.search);
  let { offset } = parsedQueryString;
  const { limit } = parsedQueryString;

  if (offset < 0) offset = 0;

  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect((queryOffset = offset || 0, queryLimit = limit || 10) => {
    onFetchSlogans(queryOffset, queryLimit);
  }, []);

  const toggleFavoriteProps = {
    favorite: showFavorites,
    clickIcon: onToggleFavorite,
  };

  const paginatorTheme = {
    bg: '#2b5478',
    border: '#2b5478',
    color: '#fff',
  };

  const listProps = {
    component: ListItem,
    items: showFavorites ? favorited : slogans,
    icon: FavoriteIcon,
    loading,
    error,
    clickIcon: onFravoriteSlogan,
  };

  const paginatorProps = {
    limit: +limit,
    offset: +offset,
    total,
    step: 10,
    theme: paginatorTheme,
    onClick: onFetchSlogans,
    showPageNums: true,
  };

  return (
    <div>
      <Helmet>
        <title>Slogans</title>
        <meta name="description" content="Description of Slogans" />
      </Helmet>
      <H2 centered>
        <FormattedMessage {...messages.header} />
      </H2>
      <TogglerWrapper>
        <Span theme={{ color: '#2b5478', fontSize: '1.25em' }}>
          {showFavorites ? (
            <FormattedMessage {...messages.hideFavorites} />
          ) : (
            <FormattedMessage {...messages.showFavorites} />
          )}
        </Span>
        <FavoriteIcon {...toggleFavoriteProps} />
      </TogglerWrapper>
      <div>
        <SlogansList {...listProps} />
        {showFavorites ? null : <Paginator {...paginatorProps} />}
      </div>
    </div>
  );
}

SlogansPage.propTypes = {
  onFetchSlogans: PropTypes.func.isRequired,
  onFravoriteSlogan: PropTypes.func.isRequired,
  onToggleFavorite: PropTypes.func.isRequired,
  slogans: PropTypes.array.isRequired,
  favorited: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
  showFavorites: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  slogans: makeSelectSlogans(),
  total: makeSelectSloganLength(),
  favorited: makeSelectFavoritedSlogans(),
  loading: makeSelectSloganLoading(),
  error: makeSelectSloganError(),
  showFavorites: makeSelectShowFavorites(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onFetchSlogans: (offset, limit) => dispatch(fetchSlogans(offset, limit)),
    onFravoriteSlogan: (id, text) => dispatch(favoriteSlogan(id, text)),
    onToggleFavorite: () => dispatch(toggleFavorites()),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(SlogansPage);
