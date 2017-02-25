/**
*
* RoomManagementBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import RoomEntry from '../RoomEntry'
import Button from '../Button'

const RoomManagementBox = (props) => {
  console.log('props:', props)
  const RoomEntryList = (
    <table className="table">
      <thead>
        <tr>
          <th className="col-xs-2">
            <FormattedMessage {...messages.roomNumber} />
          </th>
          <th className="col-xs-3">
            <FormattedMessage {...messages.guestName} />
          </th>
          <th className="col-xs-3">
            <FormattedMessage {...messages.status} />
          </th>
          <th className="col-xs-3">
            <FormattedMessage {...messages.action} />
          </th>
        </tr>
      </thead>
      <tbody>
        { props.rooms.map((room, key) => (
            <RoomEntry
              key={key}
              makeAvailable={props.makeAvailable}
              checkIn={props.checkIn}
              remove={props.remove}
              room={room}
            />
          )) }
      </tbody>
    </table>
  );

  return (
    <div className="overviewBox">
      <div className="overviewBoxHeader">
        <h3>
          <FormattedMessage {...messages.header} />
        </h3>
      </div>
      { RoomEntryList }
      <Button onClick={props.showAddRoomModal}>
        <FormattedMessage {...messages.addRoom} />
      </Button>
    </div>
  );
}

RoomManagementBox.propTypes = {

};

export default RoomManagementBox;
