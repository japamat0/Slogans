/**
 *
 * SlogansList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';

function SlogansList(props) {
  const { loading, error, items } = props;

  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    return (
      <List component={() => <ListItem item="Oops, something went wrong!" />} />
    );
  }

  if (!items.length) {
    return (
      <List
        component={() => (
          <ListItem item="Hmm... 🧐 Couldn't find any slogans" />
        )}
      />
    );
  }

  return <List items={items} component={ListItem} {...props} />;
}

SlogansList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.array,
};

export default SlogansList;
