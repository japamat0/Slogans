import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import Wrapper from './Wrapper';

function ListItem(props) {
  return (
    <Wrapper>
      <Item>{props.item}</Item>
      {props.icon ? props.icon(props) : null}
    </Wrapper>
  );
}

ListItem.propTypes = {
  item: PropTypes.any,
  icon: PropTypes.func,
};

export default ListItem;
