/**
*
* GuestStatusBox
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const GuestStatusBox = () => (
  <div className='overviewBox'>
    <FormattedMessage {...messages.header} />
  </div>
);

GuestStatusBox.propTypes = {

};

export default GuestStatusBox;
