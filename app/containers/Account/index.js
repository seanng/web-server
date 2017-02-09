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

import EarningsView from 'components/EarningsView';

let data = [{
  id: 1,
  date: new Date(2017,0,1),
  guest: "Sean",
  roomId: 123,
  roomIncome: 400,
  addIncome: 0
}, {
  id: 2,
  date: new Date(2017,0,7),
  guest: "AJ",
  roomId: 456,
  roomIncome: 1200,
  addIncome: 108
}, {
  id: 3,
  date: new Date(2017,1,8),
  guest: "Michael",
  roomId: 888,
  roomIncome: 800,
  addIncome: 0
}];

export class Account extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      <SubNavigation title='account' activeView={this.props.view} clickTab={this.props.clickTab.bind(this)} />
        <div className='container'>
          <SubHeader title={this.props.view} />
          {this.props.view === 'earnings' && <EarningsView data={data}/>}
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
