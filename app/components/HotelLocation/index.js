/**
*
* HotelLocation
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RightContainer from 'components/RightContainer'

const containerStyle = {
  height: '200px'
}

function HotelLocation() {
  const onClick = () => console.log('clicking location')
  return (
    <RightContainer title='location' topRightIcon='glyphicon glyphicon-pencil' onClick={onClick} style={containerStyle}>

    </RightContainer>
  );
}

export default HotelLocation;


const Right = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-between;
`
