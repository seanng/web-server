/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import Navigation from 'components/Navigation';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  min-height: calc(100vh);
  background-color: #EEF4F7;
`;

export class App extends React.Component {
  showNavigation () {
    return location.pathname !== '/' && location.pathname !== '/login' && location.pathname !== '/logout'
  }
  render () {
    const { location, children } = this.props
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="Haven Web Application"
          meta={[
            { name: 'description', content: 'Haven Web Application' },
          ]}
        />
        { this.showNavigation() && <Navigation />}
        {React.Children.toArray(children)}
      </AppWrapper>
    );
  }
}

export default withProgressBar(App);
