/**
*
* RoomEntry
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';
// import styled from 'styled-components';

import Button from '../Button';
import messages from './messages';

class RoomEntry extends React.Component {
  checkIn() {
    const { roomId } = this.props.room;
    this.props.checkIn(roomId);
  }

  makeAvailable() {
    const { roomNumber } = this.props.room;
    this.props.makeAvailable(roomNumber);
  }

  remove() {
    const { roomNumber } = this.props.room;
    this.props.remove(roomNumber);
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
          { moment(this.props.room.checkInTime).fromNow() }
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
  checkIn: PropTypes.func.isRequired,
  makeAvailable: PropTypes.func.isRequired,
  room: PropTypes.object.isRequired,
  remove: PropTypes.func.isRequired,

};

export default RoomEntry;
