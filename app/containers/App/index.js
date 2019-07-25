/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import SlogansPage from 'containers/SlogansPage/Loadable';
import SlogansFormPage from 'containers/SloganFormPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Header from 'components/Header';
import Footer from 'components/Footer';

import GlobalStyle from '../../global-styles';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  background-color: #e3e3e3;
  width: 100%;
  min-height: 100vh;
`;

export default function App() {
  return (
    <BodyWrapper>
      <Header />
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>
        <Switch>
          <Route exact path="/slogans" component={SlogansPage} />
          <Route exact path="/slogans/add" component={SlogansFormPage} />
          <Redirect to="/slogans" />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <Footer />
        <GlobalStyle />
      </AppWrapper>
    </BodyWrapper>
  );
}
