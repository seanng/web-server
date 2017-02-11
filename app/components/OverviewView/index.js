import React from 'react';
// import styled from 'styled-components';

import SummaryBox from '../SummaryBox';
import AvailabilityBox from '../AvailabilityBox';
import GuestStatusBox from '../GuestStatusBox';
import ActivityFeedBox from '../ActivityFeedBox';

const OverviewView = (props) => (
  <div>
    <div className='row'>
      <div className='col-sm-6'>
        <SummaryBox summary={props.summary} />
      </div>
      <div className='col-sm-6'>
        <AvailabilityBox updateAvailability={props.updateAvailability}/>
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-6'>
        <GuestStatusBox
          inboundData={props.inboundData}
          inroomData={props.inboundData}
          />
      </div>
      <div className='col-sm-6'>
        <ActivityFeedBox />
      </div>
    </div>
  </div>
);

OverviewView.propTypes = {

};

export default OverviewView;