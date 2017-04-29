/**
*
* RightContainer
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import messages from '../HotelProfile/messages'

const RightContainer = ({ children, title, topRightIcon, onClick }) => {
  return (
    <Wrapper>
      <Border>
        <Header>
          <h3><FormattedMessage {...messages[title]} /></h3>
          { topRightIcon && <Span className={topRightIcon} onClick={onClick} /> }
        </Header>
        { children }
      </Border>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 30%;
`
const Border = styled.div`
  border: 1px solid black;
  height: 100%;
  padding: 20px;
  overflow: auto;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`
const Span = styled.span`
  cursor: pointer;
`

export default RightContainer;
