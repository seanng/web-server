/**
*
* Navigation
*
*/

import React from 'react';
import { Grid } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Nav from './Nav';
import Link from './Link';

function Navigation({ user }) {
  return (
    <Nav className="navbar navbar-static-top">
      <Grid>
        <div className="navbar-header">
          <a className="navbar-brand">HAVEN</a>
        </div>
        <div className="collapse navbar-collapse" id="navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="nav-link" to="/home">
                <FormattedMessage {...messages.frontdesk} />
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/account">
                {user.firstName} {user.lastName.toUpperCase()}
              </Link>
            </li>
            <li>
              <Link className="nav-link " to="/logout">
                <FormattedMessage {...messages.logout} />
              </Link>
            </li>
          </ul>
        </div>
      </Grid>
    </Nav>
  );
}

export default Navigation;
