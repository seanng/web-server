/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navigation from 'components/Navigation';
import withProgressBar from 'components/ProgressBar';

const AppWrapper = styled.div`
  min-height: 100%;
`;

export function App(props) {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="Haven Web Application"
        meta={[
          { name: 'description', content: 'Haven Web Application' },
        ]}
      />
      { props.location.pathname !== '/login' && <Navigation />}
      {React.Children.toArray(props.children)}
    </AppWrapper>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
