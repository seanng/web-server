/**
*
* AvailabilityBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function AvailabilityBox() {
  return (
    <div className="overviewBox">
      <FormattedMessage {...messages.header} />
    </div>
  );
}

AvailabilityBox.propTypes = {

};

export default AvailabilityBox;
