/*
 *
 * Splash
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { checkAuth } from 'containers/App/actions'
import { checkedToken, currentUser } from 'containers/App/selectors'

export class Splash extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    const token = window.localStorage.accessToken || null
    if (token) {
      return this.props.checkAuth(token)
    } else {
      return this.props.router.push('/login')
    }
  }

  componentDidUpdate (prev) {
    const { router, checkedToken, currentUser } = this.props
    if (!prev.checkedToken && checkedToken) {
      if (!currentUser) {
        return router.push('/login')
      } else {
        return router.push('home')
      }
    }
  }

  render() {
    return (
      <div>
        werwerwer
        this is the splash screen.
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  checkedToken: checkedToken(),
  currentUser: currentUser()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    checkAuth: (token) => dispatch(checkAuth(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
