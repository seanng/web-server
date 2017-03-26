/*
 *
 * FrontDesk
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import messages from './messages';

import { getFilter, getRoomsByStatus, getView, getDisplayAddRoom, displayChargesModal, getCharges, getStays, getReviewLoadingState } from './selectors';
import { fetchRooms, fetchStays, setView, setFilter, selectAddRoom, selectViewCharges, checkIn, makeAvailable, createRoom, deleteRoom } from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

import FrontDeskOverview from 'components/FrontDeskOverview';
import FrontDeskReview from 'components/FrontDeskReview';
import AddRoomModal from 'components/AddRoomModal';
import ChargesModal from 'components/ChargesModal';

export class FrontDesk extends React.Component { // eslint-disable-line react/prefer-stateless-function

  getSummary() {
    const { rooms } = this.props;
    return {
      inbound: rooms.inbound.length,
      checkedin: rooms.checkedin.length,
      checkedout: rooms.checkedout.length,
      available: rooms.available.length,
      all: rooms.all.length,
    }
  }

  getFilteredRooms(filter) {
    const { rooms } = this.props;
    return rooms[filter];
  }

  showAddRoomModal() {
    this.props.selectAddRoom(true)
  }

  hideAddRoomModal() {
    this.props.selectAddRoom(false)
  }

  showChargesModal(stay) {
    this.props.selectViewCharges(stay);
  }

  hideChargesModal() {
    this.props.selectViewCharges(false);
  }

  renderOverview() {
    return (
      <div>
        <FrontDeskOverview
          fetchRooms={this.props.fetchRooms}
          summary={this.getSummary()}
          rooms={this.getFilteredRooms(this.props.filter)}
          showAddRoomModal={this.showAddRoomModal.bind(this)}
          checkIn={this.props.checkIn}
          makeAvailable={this.props.makeAvailable}
          remove={this.props.deleteRoom}
          setFilter={this.props.setFilter}
        />
        <AddRoomModal
          show={this.props.displayAddRoom}
          hide={this.hideAddRoomModal.bind(this)}
          createRoom={this.props.createRoom}
        />
      </div>
    )
  }

  renderReview() {
    return (
      <div>
        <FrontDeskReview
          isReviewLoading={this.props.isReviewLoading}
          fetchStays={this.props.fetchStays}
          stays={this.props.stays}
          showChargesModal={this.showChargesModal.bind(this)}
        />
        <ChargesModal
          data={this.props.getCharges}
          show={this.props.displayChargesModal}
          hide={this.hideChargesModal.bind(this)}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <SubNavigation
          title='frontdesk'
          activeView={this.props.view}
          clickTab={this.props.setView.bind(this)}
        />
        <div className='container'>
          <SubHeader
            title={this.props.view}
          />
          {this.props.view === 'overview' && this.renderOverview()}
          {this.props.view === 'review' && this.renderReview()}
        </div>
      </div>
    );
  }
}

FrontDesk.propTypes = {
  setView: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  rooms: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  displayAddRoom: PropTypes.bool.isRequired,
  displayChargesModal: PropTypes.bool.isRequired,
  getCharges: PropTypes.object.isRequired,
};

const mapStateToProps = createStructuredSelector({
  filter: getFilter(),
  view: getView(),
  rooms: getRoomsByStatus(),
  displayAddRoom: getDisplayAddRoom(),
  displayChargesModal: displayChargesModal(),
  getCharges: getCharges(),
  stays: getStays(),
  isReviewLoading: getReviewLoadingState(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchRooms: () => {
    dispatch(fetchRooms());
  },
  fetchStays: () => {
    dispatch(fetchStays());
  },
  setView: (view) => {
    dispatch(setView(view));
  },
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  },
  selectAddRoom: (display) => {
    dispatch(selectAddRoom(display));
  },
  selectViewCharges: (stay) => {
    dispatch(selectViewCharges(stay))
  },
  createRoom: (roomNumber) => {
    dispatch(createRoom(roomNumber));
  },
  checkIn: (roomNumber) => {
    dispatch(checkIn(roomNumber));
  },
  makeAvailable: (roomNumber, key) => {
    dispatch(makeAvailable(roomNumber, key));
  },
  deleteRoom: (roomNumber) => {
    dispatch(deleteRoom(roomNumber));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);
