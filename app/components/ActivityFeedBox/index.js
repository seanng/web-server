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
      <FormattedMessage {...messages.header} />
    </div>
  );
}

ActivityFeedBox.propTypes = {

};

export default ActivityFeedBox;
