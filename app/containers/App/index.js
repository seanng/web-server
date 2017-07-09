/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Helmet from 'react-helmet';
import Navigation from 'components/Navigation';
import withProgressBar from 'components/ProgressBar';
import { currentUser } from './selectors';
import AppWrapper from './AppWrapper';

export class App extends React.Component {
  showNavigation() {
    return (
      location.pathname !== '/' &&
      location.pathname !== '/login' &&
      location.pathname !== '/logout'
    );
  }
  render() {
    const { children, user } = this.props;
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="Haven Web Application"
          meta={[{ name: 'description', content: 'Haven Web Application' }]}
        />
        {this.showNavigation() && user !== null && <Navigation user={user} />}
        {React.Children.toArray(children)}
      </AppWrapper>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  user: currentUser(),
});

export default connect(mapStateToProps)(withProgressBar(App));
