/**
*
* AvailabilityBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import InputSelector from '../InputSelector'

function AvailabilityBox(props) {
  return (
    <div className="overviewBox">
      <FormattedMessage {...messages.header} />
        <InputSelector
          incrementInput={props.incrementInput}
          decrementInput={props.decrementInput}
          value={props.inputValue}
          />
    </div>
  );
}

AvailabilityBox.propTypes = {

};

export default AvailabilityBox;
