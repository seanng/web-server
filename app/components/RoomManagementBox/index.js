/**
*
* RoomManagementBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Button from '../Button'

const RoomManagementBox = (props) => {
  return (
    <div className="overviewBox">
      <FormattedMessage {...messages.header} />

      <Button onClick={props.showAddRoomModal}>
        <FormattedMessage {...messages.addRoom} />
      </Button>
    </div>
  );
}

RoomManagementBox.propTypes = {

};

export default RoomManagementBox;
