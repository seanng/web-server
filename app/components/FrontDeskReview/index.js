/**
*
* FrontDeskReview
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Review() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Review.propTypes = {

};

export default Review;
