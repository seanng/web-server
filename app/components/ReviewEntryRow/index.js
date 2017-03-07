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
  getDuration() {
    let diff = this.props.stay.checkInTime - this.props.stay.checkOutTime;
    let res = moment.duration(diff).humanize();
    // console.log(res)
    return res;
  }

  showChargesModal() {
    const { showChargesModal, stay } = this.props;
    showChargesModal(stay);
  }

  render () {
    const { guestName, roomNumber, checkInTime, checkOutTime, earnings } = this.props.stay
    return (
      <tr>
        <td>{ guestName }</td>
        <td>{ roomNumber }</td>
        <td>{ checkInTime }</td>
        <td>{ checkOutTime }</td>
        <td>{ this.getDuration() }</td>
        <td>HK${ earnings }</td>
        <td>
          <Button onClick={this.showChargesModal}>
            <FormattedMessage {...messages.addCharges} />
          </Button>
        </td>
      </tr>
    )
  }
}

ReviewEntryRow.propTypes = {

};

export default ReviewEntryRow;
