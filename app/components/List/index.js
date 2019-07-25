import React from 'react';
import PropTypes from 'prop-types';

import Ul from './Ul';
import Wrapper from './Wrapper';

function List(props) {
  const ComponentToRender = props.component;
  let content = <div />;
  // If we have items, render them
  if (props.items) {
    const { clickIcon } = props;
    content = props.items.map(item => (
      <ComponentToRender
        key={`item-${item.id}`}
        item={item.text}
        {...item}
        clickIcon={clickIcon}
        icon={props.icon}
      />
    ));
  } else {
    // Otherwise render a single component
    content = <ComponentToRender />;
  }

  return (
    <Wrapper>
      <Ul>{content}</Ul>
    </Wrapper>
  );
}

List.propTypes = {
  component: PropTypes.elementType.isRequired,
  items: PropTypes.array,
  icon: PropTypes.func,
  clickIcon: PropTypes.func,
};

export default List;
