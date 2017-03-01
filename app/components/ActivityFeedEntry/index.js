/**
*
* ActivityFeedEntry
*
*/

import React, { PropTypes } from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ActivityFeedEntry = ({ activity }) => (
  <tr>
    <Time className="col-xs-3">
      { activity.time }
    </Time>
    <Activity className="col-xs-9">
      { activity.guest }&nbsp;
      {
      /*
      <FormattedMessage {...messages[activity.status]} />
      */
      }
    </Activity>
  </tr>
);

const Time = styled.td`
  font-size: 12px;
  padding-left: 15px!important;
`

const Activity = styled.td`
  font-size: 12px;
`

ActivityFeedEntry.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default ActivityFeedEntry;
