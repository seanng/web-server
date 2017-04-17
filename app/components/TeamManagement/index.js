/**
*
* TeamManagement
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function TeamManagement() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

TeamManagement.propTypes = {

};

export default TeamManagement;
