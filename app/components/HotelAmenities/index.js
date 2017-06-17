/**
*
* HotelAmenities
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import RightContainer from 'components/RightContainer'
import services from './services.json';
import messages from './messages';

const containerStyle = {
  height: '170px',
  marginBottom: '25px'
}

const Img = styled.img`
  height: 100%;
  width: 50%;
`

const ImgWrapper = styled.div`
  display: block;
  text-align: center;
  height: 40px;
  width: 80px;
  padding-bottom: 10px;
`

const AmenityIconWrapper = styled.div`
  display: inline-block;
  text-align: center;
`

const AmenitiesWrapper = styled.div`
  overflow: scroll;
  padding-top: 30px;
`

const AmenityIcon = ({ amenity }) => {
  const iconName = services[amenity]
  return (
    <AmenityIconWrapper>
      <ImgWrapper>
        <Img src={iconName} />
      </ImgWrapper>
      { amenity }
    </AmenityIconWrapper>
  )
}

const HotelAmenities = ({ displayAmenitiesModal, amenities }) => {
  const onClick = () => displayAmenitiesModal(true)
  return (
    <RightContainer 
      title='amenities' 
      topRightIcon='glyphicon glyphicon-pencil' 
      style={containerStyle} 
      onClick={onClick}
    >
      <AmenitiesWrapper>
        { amenities.map((amenity, i) => <AmenityIcon amenity={amenity} key={i} /> )}
      </AmenitiesWrapper>
    </RightContainer>
  )
}

export default HotelAmenities;
