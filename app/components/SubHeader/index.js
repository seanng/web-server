/**
*
* SubHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const SubHeader = ({title}) => (
  <h1>
    <FormattedMessage {...messages[title]} />
  </h1>
);


SubHeader.propTypes = {

};

export default SubHeader;
