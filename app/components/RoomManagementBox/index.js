/**
*
* RoomManagementBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function RoomManagementBox(props) {
  return (
    <div>
      <FormattedMessage {...messages.header} />

      <Button onClick={props.addRoom.bind(this)}>
        <FormattedMessage {...messages.addRoom} />
      </Button>
    </div>
  );
}

RoomManagementBox.propTypes = {

};

export default RoomManagementBox;
