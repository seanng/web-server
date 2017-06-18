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

import { getView, getEarningsFilter } from './selectors';
import { selectHotelInfo, isEditingHotelProfile } from 'containers/HotelProfile/selectors'
import { saveHotelProfile, getHotelInfo } from 'containers/HotelProfile/actions'
import { switchView, setEarningsFilter } from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

import EarningsView from 'components/EarningsView';
import HotelProfile from 'containers/HotelProfile';
import TeamManagement from 'components/TeamManagement';
import Settings from 'components/Settings';

let data = [{
  id: 1,
  date: new Date(2016,0,1),
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

  saveHotelProfile = () => {
    const { saveHotelProfile, hotel } = this.props
    saveHotelProfile(hotel)
  }

  revertHotelProfile = () => {
    const { revertHotelProfile, hotel } = this.props
    revertHotelProfile(hotel.id)
  }

  render() {
    const { view, clickTab, hotel, isEditing, clickEarningsFilter, earningsFilter } = this.props
    return (
      <div>
      <SubNavigation title='account' activeView={view} clickTab={clickTab.bind(this)} />
        <div className='container'>
          <SubHeader 
            title={view} 
            hotelName={hotel && hotel.name} 
            isEditing={isEditing} 
            saveHotelProfile={this.saveHotelProfile}
            revertHotelProfile={this.revertHotelProfile}
          />
          {view === 'earnings' && (
            <EarningsView
              data={data}
              clickEarningsFilter={clickEarningsFilter.bind(this)}
              activeEarningsFilter={earningsFilter}
            />)}
          {view === 'hotelProfile' && <HotelProfile />}
          {view === 'teamManagement' && <TeamManagement />}
          {view === 'settings' && <Settings />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  view: getView(),
  earningsFilter: getEarningsFilter(),
  Account: makeSelectAccount(),
  hotel: selectHotelInfo(),
  isEditing: isEditingHotelProfile()
});

const mapDispatchToProps = (dispatch) => ({
  clickTab: (view) =>
    dispatch(switchView(view)),
  clickEarningsFilter: (filter) =>
    dispatch(setEarningsFilter(filter)),
  saveHotelProfile: (hotelInfo) =>
    dispatch(saveHotelProfile(hotelInfo)),
  revertHotelProfile: (hotelId) =>
    dispatch(getHotelInfo(hotelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Account);
