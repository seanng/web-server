/*
 *
 * Logout
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { logout } from 'containers/App/actions'
import { currentUser } from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect'

export class Logout extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.props.logout();
  }

  componentDidUpdate () {
    if (!this.props.currentUser) {
      delete window.localStorage.accessToken;
      this.props.router.push('/login');
    }
  }

  render() {
    return (
      <div>
        logging out...
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser()
});

const mapDispatchToProps = (dispatch) =>({
  logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
