/**
*
* HotelHourlyRate
*
*/

import React from 'react';
import styled from 'styled-components';
import { FormControl } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RightContainer from 'components/RightContainer'

const containerStyle = {
  height: '123px',
  marginBottom: '25px'
}

const glyphicon1Style = {
  marginRight: '35px',
  fontSize: '20px'
}

const glyphicon2Style = {
  marginLeft: '35px',
  fontSize: '20px'
}

function HotelHourlyRate({ increase, decrease, edit, value }) {
  return (
    <RightContainer title='hourlyRate' style={containerStyle}>
      <CenteredDiv>
        <span onClick={() => decrease()} className="glyphicon glyphicon-minus-sign" style={glyphicon1Style} />
        <FormControl 
          type="number"
          onChange={(e) => edit(e)}
          value={value}
          id='testr'
        />
        <span onClick={() => increase()} className="glyphicon glyphicon-plus-sign" style={glyphicon2Style} />
      </CenteredDiv>
    </RightContainer>
  );
}

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
`
const Input = styled.input`
  width: 100px;
`

export default HotelHourlyRate;
