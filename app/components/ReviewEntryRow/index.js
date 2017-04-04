/**
*
* ReviewEntryRow
*
*/

import React, { PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import moment from 'moment';

import Button from '../Button';
import messages from './messages';

class ReviewEntryRow extends React.Component {
  getDate() {
    const isSameDay = moment(this.props.stay.checkInTime).format('MM DD') === moment(this.props.stay.checkOutTime).format('MM DD');
    if (isSameDay) {
      return moment(this.props.stay.checkInTime).format("MMM Do")
    } else {
      return `${moment(this.props.stay.checkInTime).format("MMM Do")} - ${moment(this.props.stay.checkOutTime).format("Do MMM")}`
    }
  }

  getDuration() {
    let diff = moment(this.props.stay.checkInTime) - moment(this.props.stay.checkOutTime);
    let res = moment.duration(diff).humanize();
    return res;
  }

  showChargesModal() {
    const { showChargesModal, stay } = this.props;
    console.log('stay!', stay)
    showChargesModal(stay.id);
  }

  render () {
    const { customerName, roomNumber, checkInTime, checkOutTime, roomCharge, totalCharge } = this.props.stay
    return (
      <tr>
        <td> { this.getDate() } </td>
        <td>{ customerName }</td>
        <td>{ roomNumber }</td>
        <td>{ moment(checkInTime).format('h:mm a') }</td>
        <td>{ moment(checkOutTime).format('h:mm a') }</td>
        <td>{ this.getDuration() }</td>
        <td>HK${ roomCharge }</td>
        <td>
          <Button onClick={this.showChargesModal.bind(this)}>
            <FormattedMessage {...messages.addCharges} />
          </Button>
        </td>
        <td>HK${ totalCharge }</td>
      </tr>
    )
  }
}

ReviewEntryRow.propTypes = {

};

export default ReviewEntryRow;
