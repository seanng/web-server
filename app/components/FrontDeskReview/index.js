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

const Wrapper = styled.div`

`

export class Review extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('fetching stays.', this.props)
    this.props.fetchStays();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && !this.props.isReviewLoading) {
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
    return (
      <Wrapper>
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
                <FormattedMessage {...messages.earnings} />
              </th>
              <th>
                <FormattedMessage {...messages.surcharges} />
              </th>
            </tr>
          </thead>
          <tbody>
            { /*props.stays.map((stay, key)=> (
              <ReviewEntryRow
                showChargesModal={this.props.showChargesModal}
              />
            )) */}
          </tbody>
        </table>
      </Wrapper>
    )
  }

  render() {
    return this.props.isReviewLoading ? this.isLoading() : this.hasLoaded();
  }
}

Review.propTypes = {

};

export default Review;
