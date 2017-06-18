/**
*
* SubHeader
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import Button from 'components/Button'

const Title = styled.div`
  font-size: 1.5em;
  margin-top: 0.9em;
  margin-bottom: 0.9em;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  font-size: 1.5em;
  margin-top: 0.9em;
  margin-bottom: 0.9em;
`

const WrapperChild = styled.div`
  flex: 1;
`

const WrapperChild2 = styled.div`
  flex: 1;
  text-align: right;
`

const SubHeader = ({ title, hotelName, isEditing, saveHotelProfile, revertHotelProfile }) => {
  if (title !== 'hotelProfile') {
    return (
      <Title>
        <FormattedMessage {...messages[title]} />
      </Title>
    )
  }
  return (
    <Wrapper>
      <WrapperChild>
        { hotelName }
      </WrapperChild>
      { isEditing && (
        <WrapperChild2>
          <span>
            <Button bgColor='#fec611' onClick={revertHotelProfile}>
              <FormattedMessage {...messages.revertHotelProfile} />
            </Button>
          </span>
          <span>
            <Button bgColor='#2dc937' onClick={saveHotelProfile}>
              <FormattedMessage {...messages.saveHotelProfile} />
            </Button>
          </span>
        </WrapperChild2>
      )}
    </Wrapper>
  )
}

export default SubHeader;
