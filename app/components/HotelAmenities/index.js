/**
*
* HotelAmenities
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import RightContainer from 'components/RightContainer'
import messages from './messages';

function HotelAmenities() {
  const onClick = () => console.log('clicking amenities')
  return (
    <RightContainer title='amenities' topRightIcon='glyphicon glyphicon-plus-sign' onClick={onClick}>

    </RightContainer>
  )
}

export default HotelAmenities;
