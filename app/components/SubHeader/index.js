/**
*
* SubHeader
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function SubHeader({title}) {
  return (
    <div>
      <FormattedMessage {...messages[title]} />
    </div>
  );
}

SubHeader.propTypes = {

};

export default SubHeader;
