/**
*
* Tab
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Tab({view, active, clickTab}) {

  const Span = active ? styled.span`
    color: red;
  ` : styled.span`
    color: gray;
  `

  return (
    <Span onClick={clickTab.bind(this, view)}>
      <FormattedMessage {...messages[view]} />
    </Span>
  );
}

Tab.propTypes = {

};

export default Tab;
