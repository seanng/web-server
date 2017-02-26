/**
*
* ActivityFeedBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import Entry from '../ActivityFeedEntry'

function ActivityFeedBox() {
  return (
    <div className="overviewBox">
      <div className="overviewBoxHeader">
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="col-xs-3">
              <FormattedMessage {...messages.time} />
            </th>
            <th className="col-xs-9">
              <FormattedMessage {...messages.activity} />
            </th>
          </tr>
        </thead>
        <tbody>
          { /* props.activity.map((activity, key) => (
            <Entry
              key={key}
              activity={activity}
            />
          )) */ }
        </tbody>
      </table>
    </div>
  );
}

ActivityFeedBox.propTypes = {

};

export default ActivityFeedBox;
