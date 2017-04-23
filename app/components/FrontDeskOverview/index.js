import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import SummaryBox from '../SummaryBox';
import ActivityFeedBox from '../ActivityFeedBox';
import RoomManagementBox from '../RoomManagementBox';

export class Overview extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    // fetch Rooms from cache.
    this.props.fetchRooms();
  }

  render() {
    return (
      <div className="row body-wrapper">
        <div className="col-sm-5 column-wrapper">
          <SummaryBox
            summary={this.props.summary}
          />
          <ActivityFeedBox />
        </div>
        <div className="col-sm-7 column-wrapper">
          <RoomManagementBox
            setFilter={this.props.setFilter}
            rooms={this.props.rooms}
            showAddRoomModal={this.props.showAddRoomModal}
            checkIn={this.props.checkIn}
            makeAvailable={this.props.makeAvailable}
            remove={this.props.remove}
          />
        </div>
      </div>
    )
  }
}

Overview.propTypes = {
  summary: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  rooms: PropTypes.array.isRequired,
  showAddRoomModal: PropTypes.func.isRequired,
  checkIn: PropTypes.func.isRequired,
  makeAvailable: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default Overview;
