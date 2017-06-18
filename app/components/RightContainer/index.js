/**
*
* RightContainer
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import messages from './messages'

const RightContainer = ({ children, title, topRightIcon, onClick, style }) => {
  return (
    <div style={style}>
      <Border>
        <Header>
          <h3><FormattedMessage {...messages[title]} /></h3>
          { topRightIcon && <Span className={topRightIcon} onClick={onClick} /> }
        </Header>
        { children }
      </Border>
    </div>
  )
}

const Border = styled.div`
  border: 1px solid black;
  height: 100%;
  padding: 20px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const Span = styled.span`
  cursor: pointer;
`

export default RightContainer;
