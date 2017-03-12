import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import SummaryBox from '../SummaryBox';
import ActivityFeedBox from '../ActivityFeedBox';
import RoomManagementBox from '../RoomManagementBox';

const Overview = (props) => (
  <div>
    <div className="row">
      <div className="col-sm-5">
        <SummaryBox
          summary={props.summary}
        />
        <ActivityFeedBox />
      </div>
      <div className="col-sm-7">
        <RoomManagementBox
          setFilter={props.setFilter}
          rooms={props.rooms}
          showAddRoomModal={props.showAddRoomModal}
          checkIn={props.checkIn}
          makeAvailable={props.makeAvailable}
          remove={props.remove}
        />
      </div>
    </div>
  </div>
);

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
