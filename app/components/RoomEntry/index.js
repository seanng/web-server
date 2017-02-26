/**
*
* RoomEntry
*
*/

import React from 'react';
// import styled from 'styled-components';

import Button from '../Button';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

class RoomEntry extends React.Component {
  constructor(props) {
    super(props)
  }

  checkIn(e) {
    const { roomId } = this.props.room;
    this.props.checkIn(roomId);
  }

  makeAvailable(e) {
    const { roomNumber } = this.props.room;
    this.props.makeAvailable(roomNumber);
  }

  remove(e) {
    const { roomNumber } = this.props.room;
    this.props.deleteRoom(roomNumber)
  }

  renderAction() {
    if (this.props.room.status === 'Available') {
      return (
        <Button onClick={this.remove.bind(this)}>
          <FormattedMessage {...messages.remove} />
        </Button>
      )
    }
    if (this.props.room.status === 'Checked Out') {
      return (
        <Button onClick={this.makeAvailable.bind(this)}>
          <FormattedMessage {...messages.makeAvailable} />
        </Button>
      )
    }
    if (this.props.room.status === 'Inbound') {
      return (
        <Button onClick={this.checkIn.bind(this)}>
          <FormattedMessage {...messages.checkIn} />
        </Button>
      )
    }
    if (this.props.room.status === 'Checked In') {
      return (
        <span>
          { this.props.room.checkInTime }
        </span>
      )
    }
  }

  render() {
    const { roomNumber, guestName, status, checkInTime } = this.props.room;
    return (
      <tr>
        <td className="col-xs-2">
          { roomNumber }
        </td>
        <td className="col-xs-3">
          { guestName }
        </td>
        <td className="col-xs-3">
          { status }
        </td>
        <td className="col-xs-3">
          { this.renderAction() }
        </td>
      </tr>
    )
  }

}

RoomEntry.propTypes = {

};

export default RoomEntry;
