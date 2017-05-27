/**
*
* HotelHourlyRate
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import RightContainer from 'components/RightContainer'

function HotelHourlyRate({ increase, decrease, edit, value }) {
  return (
    <RightContainer title='hourlyRate'>
      <CenteredDiv>
        <span onClick={() => decrease()} className="glyphicon glyphicon-minus-sign" />
        <Input
          type="number"
          value={value}
          onChange={(e) => edit(e)}
          id='testr'
        />
        <span onClick={() => increase()} className="glyphicon glyphicon-plus-sign" />
      </CenteredDiv>
    </RightContainer>
  );
}

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`
const Input = styled.input`
  width: 100px;
`

export default HotelHourlyRate;
