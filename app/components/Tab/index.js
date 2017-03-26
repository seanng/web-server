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
    color: black;
    font-weight: 600;
    margin-left: 40px;

    &:hover {
      cursor: pointer;
    }
  ` : styled.span`
    color: grey;
    margin-left: 40px;
    
    &:hover {
      cursor: pointer;
    }
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
