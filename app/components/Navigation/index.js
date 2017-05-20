/**
*
* Navigation
*
*/

import React from 'react';
// import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router';
import { currentUser } from 'containers/App/selectors'
import { createStructuredSelector } from 'reselect';
import messages from './messages';

class Navigation extends React.Component {
  render () {
    const { currentUser } = this.props
    const accountName = (currentUser.firstName + ' ' + currentUser.lastName).toUpperCase()
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed btn-info" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle Navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              HAVEN
            </a>
          </div>
          <div className="collapse navbar-collapse" id="navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  <FormattedMessage {...messages.frontdesk} />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/account">
                  { accountName }
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/logout">
                  <FormattedMessage {...messages.logout} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: currentUser()
})

export default connect(mapStateToProps)(Navigation);
