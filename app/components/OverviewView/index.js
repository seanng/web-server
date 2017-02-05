import React from 'react';
// import styled from 'styled-components';

import SummaryBox from '../SummaryBox';
import AvailabilityBox from '../AvailabilityBox';
import GuestStatusBox from '../GuestStatusBox';
import ActivityFeedBox from '../ActivityFeedBox';

const OverviewView = () => (
  <div>
    <div className='row'>
      <div className='col-sm-6'>
        <SummaryBox />
      </div>
      <div className='col-sm-6'>
        <AvailabilityBox />
      </div>
    </div>
    <div className='row'>
      <div className='col-sm-6'>
        <GuestStatusBox />
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