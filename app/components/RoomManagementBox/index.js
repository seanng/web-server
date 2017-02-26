/**
*
* RoomManagementBox
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import messages from './messages';

import Filter from '../RoomManagementFilter';
import RoomEntry from '../RoomEntry';
import Button from '../Button';

const RoomManagementBox = (props) => {
  const RoomEntryList = (
    <table className="table">
      <thead>
        <tr>
          <TH className="col-xs-2">
            <FormattedMessage {...messages.roomNumber} />
          </TH>
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
        <div className="row">
          <div className="col-xs-6">
            <h3>
              <FormattedMessage {...messages.header} />
            </h3>
          </div>
          <div className="col-xs-6">
            <Filter setFilter={props.setFilter} />
          </div>
        </div>
      </div>
      <Div>
        { RoomEntryList }
        <Button onClick={props.showAddRoomModal}>
          <FormattedMessage {...messages.addRoom} />
        </Button>
      </Div>
    </div>
  );
}

const Div = styled.div`
  padding-bottom: 15px;
`;

const TH = styled.th`
  padding-left: 1.2em!important;
`;

RoomManagementBox.propTypes = {
  rooms: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  showAddRoomModal: PropTypes.func.isRequired,

};

export default RoomManagementBox;
