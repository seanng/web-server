/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Navigation from 'components/Navigation';
import withProgressBar from 'components/ProgressBar';
import { getCurrentUser } from './actions';
import { makeSelectCurrentUser } from './selectors';

const AppWrapper = styled.div`
  min-height: 100%;
`;

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // if token, this.props.validateToken(token)
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
        { location.pathname !== '/login' && <Navigation />}
        {React.Children.toArray(children)}
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({
  validateToken: (token) => getCurrentUser(token)
})

export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(App));
