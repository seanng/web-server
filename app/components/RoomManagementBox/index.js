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
import RoomEntryRow from '../RoomEntryRow';
import Button from '../Button';

const RoomManagementBox = (props) => {
  console.log('props in roommgmtbox', props)
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
          <RoomEntryRow
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
            <H3>
              <FormattedMessage {...messages.header} />
            </H3>
          </div>
          <div className="col-xs-6">
            <Filter setFilter={props.setFilter} />
          </div>
        </div>
      </div>
      <Div>
        { RoomEntryList }
        <ButtonWrapper>
          <Button onClick={props.showAddRoomModal}>
            <FormattedMessage {...messages.addRoom} />
          </Button>
        </ButtonWrapper>
      </Div>
    </div>
  );
}

const H3 = styled.h3`
  padding-top: 8px;
`

const Div = styled.div`
  padding-bottom: 15px;
  height: 478px;
`;

const TH = styled.th`
  padding-left: 1.2em!important;
`;

const ButtonWrapper = styled.div`
  text-align: left;
  padding-left: 15px;
`

RoomManagementBox.propTypes = {
  rooms: PropTypes.array.isRequired,
  setFilter: PropTypes.func.isRequired,
  showAddRoomModal: PropTypes.func.isRequired,

};

export default RoomManagementBox;
