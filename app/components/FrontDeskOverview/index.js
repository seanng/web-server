import React from 'react';
// import styled from 'styled-components';

import SummaryBox from '../SummaryBox';
import AvailabilityBox from '../AvailabilityBox';
import ActivityFeedBox from '../ActivityFeedBox';
import RoomManagementBox from '../RoomManagementBox';

const Overview = (props) => (
  <div>
    <div className='row'>
      <div className='col-sm-6'>
        <SummaryBox
          summary={props.summary}
        />
        <ActivityFeedBox />
      </div>
      <div className='col-sm-6'>
        <RoomManagementBox
          rooms={props.rooms}
          showAddRoomModal={props.showAddRoomModal}
        />
      </div>
    </div>
  </div>
);

Overview.propTypes = {

};

export default Overview;