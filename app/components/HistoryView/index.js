/**
*
* HistoryView
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function HistoryView() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

HistoryView.propTypes = {

};

export default HistoryView;
