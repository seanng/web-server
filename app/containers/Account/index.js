/*
 *
 * Account
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectAccount from './selectors';
import messages from './messages';

import { getView } from './selectors';
import { switchView } from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

export class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <SubNavigation title='account' activeView={this.props.view} clickTab={this.props.clickTab.bind(this)} />
        <div className='container'>
          <SubHeader title={this.props.view} />
        </div>
      </div>
    );
  }
}

Account.propTypes = {
  clickTab: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
  Account: makeSelectAccount(),
});

const mapDispatchToProps = (dispatch) => ({
  clickTab: (view) => {
    // dispatch(setParticipantList(null));
    dispatch(switchView(view));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
