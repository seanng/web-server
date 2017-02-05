/*
 *
 * Account
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAccount from './selectors';

export class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        hello from accountaslkfdj
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  Account: makeSelectAccount(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
