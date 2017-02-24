/**
*
* ActivityFeedBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function ActivityFeedBox() {
  return (
    <div className="overviewBox">
      <h3>
        <FormattedMessage {...messages.header} />
      </h3>
    </div>
  );
}

ActivityFeedBox.propTypes = {

};

export default ActivityFeedBox;
