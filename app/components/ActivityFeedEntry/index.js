/**
*
* ActivityFeedEntry
*
*/

import React, { PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ActivityFeedEntry = ({ activity }) => (
  <tr>
    <td className="col-xs-3">
      { activity.time }
    </td>
    <td className="col-xs-9">
      { activity.guest }&nbsp;
      {
      /*
      <FormattedMessage {...messages[activity.status]} />
      */
      }
    </td>
  </tr>
);

ActivityFeedEntry.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default ActivityFeedEntry;
