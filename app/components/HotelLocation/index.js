/**
*
* HotelLocation
*
<FormControl 
  type='text' 
  placeholder='Enter Hotel Location'
  style={inputStyle} 
/>
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { FormControl } from 'react-bootstrap';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import FaSpinner from 'react-icons/lib/fa/spinner';
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import messages from './messages';
import RightContainer from 'components/RightContainer'

const containerStyle = {
  height: '300px'
}

const inputStyle = {
  marginTop: '20px',
  marginBottom: '20px'
}

class HotelLocation extends React.Component {
  loadingElement () {
    return (
      <div style={{ height: '100%' }}>
        <FaSpinner
          style={{
            display: `block`,
            width: `80px`,
            height: `80px`,
            margin: `150px auto`,
            animation: `fa-spin 2s infinite linear`,
          }}
        />
      </div>
    )
  }

  handleMapLoad = (map) => this._mapComponent = map;

  onClick = () => this.props.displayLocationModal(true)
  
  render () {
    const { lat, lng } = this.props
    return (
      <RightContainer 
        title='location' 
        topRightIcon='glyphicon glyphicon-pencil' 
        onClick={this.onClick} 
        style={containerStyle}
      >
        <MapWrapper>
          <LocationGoogleMap 
            lat={lat * 1}
            lng={lng * 1}
            loadingElement={this.loadingElement()}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
            onMapLoad={this.handleMapLoad}
          />   
        </MapWrapper>
      </RightContainer>
    )
  }
}

const LocationGoogleMap = withGoogleMap(({ onMapLoad, lat, lng }) => (
  <GoogleMap
    ref={onMapLoad}
    defaultZoom={16}
    defaultCenter={{ lat, lng }}
  >
    <Marker
      position={{ lat, lng }}
      key='locationMarker'
    />
  </GoogleMap>
))

const Right = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-between;
`

const MapWrapper = styled.div`
  height: 100%;
  padding-top: 15px;
  padding-bottom: 15px;
`

export default HotelLocation;
