import React from 'react';
import { FormattedMessage } from 'react-intl';

import Span from '../Span';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import messages from './messages';
import Wrapper from './Wrapper';
import BrandWrapper from './BrandWrapper';

function Header() {
  const brandTheme = {
    color: '#fff',
    background: '#2b5478',
  };
  const brandThemeTitle = {
    fontSize: '2em',
  };

  const brandThemeSlogan = {
    fontSize: '0.9em',
    fontStyle: 'oblique',
  };

  return (
    <Wrapper theme={brandTheme}>
      <BrandWrapper theme={brandTheme}>
        <Span centered theme={{ ...brandTheme, ...brandThemeTitle }}>
          <FormattedMessage {...messages.brandName} />
        </Span>
        <Span theme={{ ...brandTheme, ...brandThemeSlogan }}>
          <FormattedMessage {...messages.brandSlogan} />
        </Span>
      </BrandWrapper>
      <NavBar>
        <HeaderLink theme={brandTheme} to="/">
          <FormattedMessage {...messages.home} />
        </HeaderLink>
        <HeaderLink theme={brandTheme} to="/slogans">
          <FormattedMessage {...messages.slogans} />
        </HeaderLink>
        <HeaderLink theme={brandTheme} to="/slogans/add">
          <FormattedMessage {...messages.addSlogans} />
        </HeaderLink>
      </NavBar>
    </Wrapper>
  );
}

export default Header;
