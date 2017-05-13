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
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import Navigation from 'components/Navigation';
import withProgressBar from 'components/ProgressBar';
import { getCurrentUser, tokenNotValid } from './actions';
import { makeSelectCurrentUser, isLoaded } from './selectors';

const AppWrapper = styled.div`
  min-height: 100%;
`;

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!window.sessionStorage.accessToken) {
      console.log('none.', this.props)
      return this.props.tokenNotValid()
    }
    return this.props.tokenNotValid()
    // if token, this.props.validateToken(token)
  }

  componentWillReceiveProps (next) {
    console.log('the next props:', next.isLoaded)
  }

  render () {
    const { location, children, isLoaded } = this.props
    console.log('isloaded?', isLoaded)
    if (!isLoaded) {
      return (
        <div>hellloooooo</div>
      )
    }
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

const mapStateToProps = createStructuredSelector({
  isLoaded: isLoaded()
});

const mapDispatchToProps = () => ({
  validateToken: (token) => getCurrentUser(token),
  tokenNotValid: () => tokenNotValid()
})

export default connect(mapStateToProps, mapDispatchToProps)(withProgressBar(App));
