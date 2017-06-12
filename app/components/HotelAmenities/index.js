/**
*
* HotelAmenities
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import RightContainer from 'components/RightContainer'
import services from './services.json';
import messages from './messages';

const AmenityIcon = ({ amenity }) => {
  const iconUrl = services[amenity]
  return (
    <span>{ amenity }</span>
  )
}

const HotelAmenities = ({ displayAmenitiesModal, amenities }) => {
  const onClick = () => displayAmenitiesModal(true)
  return (
    <RightContainer title='amenities' topRightIcon='glyphicon glyphicon-plus-sign' onClick={onClick}>
      { amenities.map((amenity, i) => <AmenityIcon amenity={amenity} key={i} /> )}
    </RightContainer>
  )
}

export default HotelAmenities;
