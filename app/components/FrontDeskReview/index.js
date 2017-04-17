/**
*
* FrontDeskReview
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import ReviewEntryRow from '../ReviewEntryRow';

export class Review extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchStays();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && !nextProps.isReviewLoading) {
      console.log('nextProps in Review', nextProps);
    }
  }

  isLoading() {
    return (
      <div>
        loading.
      </div>
    )
  }

  hasLoaded() {
    console.log('hasloaded.');
    return (
      <div className="body-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th>
                <FormattedMessage {...messages.date} />
              </th>
              <th>
                <FormattedMessage {...messages.guest} />
              </th>
              <th>
                <FormattedMessage {...messages.room} />
              </th>
              <th>
                <FormattedMessage {...messages.checkin} />
              </th>
              <th>
                <FormattedMessage {...messages.checkout} />
              </th>
              <th>
                <FormattedMessage {...messages.duration} />
              </th>
              <th>
                <FormattedMessage {...messages.roomCharge} />
              </th>
              <th>
                <FormattedMessage {...messages.surcharges} />
              </th>
              <th>
                <FormattedMessage {...messages.total} />
              </th>
            </tr>
          </thead>
          <tbody>
            { this.props.stays.map((stay, key)=> (
              <ReviewEntryRow
                key={key}
                showChargesModal={this.props.showChargesModal}
                stay={stay}
              />
            )) }
          </tbody>
        </table>
      </div>
    )
  }

  render() {
    return this.props.isReviewLoading ? this.isLoading() : this.hasLoaded();
  }
}

Review.propTypes = {

};

export default Review;
