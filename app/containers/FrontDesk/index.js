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

import { getRoomsByStatus, getView, getDisplayAddRoom, } from './selectors';
import { switchView, selectAddRoom  } from './actions';

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
      inroom: rooms.inroom.length,
      checkedout: rooms.checkedout.length,
      available: rooms.available.length,
      all: rooms.all.length,
    }
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
        rooms={this.props.rooms}
        showAddRoomModal={this.showAddRoomModal.bind(this)}
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
  rooms: PropTypes.object.isRequired,
  view: PropTypes.string.isRequired,
  displayAddRoom: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  view: getView(),
  rooms: getRoomsByStatus(),
  displayAddRoom: getDisplayAddRoom(),
});

const mapDispatchToProps = (dispatch) => ({
  setView: (view) => {
    dispatch(setView(view));
  },
  selectAddRoom: (display) => {
    dispatch(selectAddRoom(display));
  },
  createRoom: (roomNumber) => {
    dispatch(createRoom(roomNumber));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(FrontDesk);
