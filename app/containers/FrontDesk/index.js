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

import { getFilter, getRoomsByStatus, getView, getDisplayAddRoom, } from './selectors';
import { setView, setFilter, selectAddRoom, checkIn, makeAvailable, deleteRoom } from './actions';

import SubNavigation from 'components/SubNavigation';
import SubHeader from 'components/SubHeader';

import FrontDeskOverview from 'components/FrontDeskOverview';
import FrontDeskReview from 'components/FrontDeskReview';
import AddRoomModal from 'components/AddRoomModal'

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

  renderOverview() {
    return (
      <FrontDeskOverview
        summary={this.getSummary()}
        rooms={this.getFilteredRooms(this.props.filter)}
        showAddRoomModal={this.showAddRoomModal.bind(this)}
        checkIn={this.props.checkIn}
        makeAvailable={this.props.makeAvailable}
        remove={this.props.deleteRoom}
      />
    )
  }

  renderReview() {
    return (
      <FrontDeskReview

      />
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
          <AddRoomModal
            show={this.props.displayAddRoom}
            hide={this.hideAddRoomModal.bind(this)}
            createRoom={this.props.createRoom}
          />
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
};

const mapStateToProps = createStructuredSelector({
  filter: getFilter(),
  view: getView(),
  rooms: getRoomsByStatus(),
  displayAddRoom: getDisplayAddRoom(),
});

const mapDispatchToProps = (dispatch) => ({
  setView: (view) => {
    dispatch(setView(view));
  },
  setFilter: (filter) => {
    dispatch(setFilter(filter));
  },
  selectAddRoom: (display) => {
    dispatch(selectAddRoom(display));
  },
  createRoom: (roomNumber) => {
    dispatch(createRoom(roomNumber));
  },
  checkIn: (stayId) => {
    dispatch(checkIn(stayId));
  },
  makeAvailable: (roomNumber) => {
    dispatch(makeAvailable(roomNumber));
  },
  deleteRoom: (roomNumber) => {
    dispatch(deleteRoom(roomNumber));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);
