/**
*
* HotelProfile
*
*/

import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
// import { FormControl } from 'react-bootstrap';
import messages from './messages';
import Button from 'components/Button'
import HotelPhotos from 'components/HotelPhotos'
import HotelDescription from 'components/HotelDescription'
import RightContainer from 'components/RightContainer'

class HotelProfile extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props)
    this.state = { value: this.props.value*1 }
  }

  componentWillMount () {
    this.props.fetchHotelInfo()
  }

  decreaseInput () {
    this.setState({ value: this.state.value - 1 })
  }

  increaseInput () {
    this.setState({ value: this.state.value + 1 })
  }

  editValue (e) {
    this.setState({ value: e.target.value })
    // this.refs.hourlyRateInput.getInputDOMNode().focus(); 
    document.getElementById('testr').focus()
    // console.log(this.refs.hourlyRateInput.props.ref)
  }

  _hourlyRate () {
    return (
      <RightContainer title='hourlyRate'>
        <CenteredDiv>
          <span onClick={() => this.decreaseInput()} className="glyphicon glyphicon-minus-sign" />
          <Input 
            type="number" 
            value={this.state.value} 
            onChange={(e) => this.editValue(e)} 
            id='testr'
          />
          <span onClick={() => this.increaseInput()} className="glyphicon glyphicon-plus-sign" />
        </CenteredDiv>
      </RightContainer>
    )
  }

  _amenities () {
    const onClick = () => {
      console.log('clicking amenities')
    }

    return (
      <RightContainer title='amenities' topRightIcon='glyphicon glyphicon-plus-sign' onClick={onClick}>

      </RightContainer>
    )
  }

  _location () {
    const onClick = () => {
      console.log('clicking location')
    }
    return (
      <RightContainer title='location' topRightIcon='glyphicon glyphicon-pencil' onClick={onClick}>

      </RightContainer>
    )
  }

  render () {
    return (
      <div>
        <ButtonWrapper>
          <Button bgColor='#2dc937' >
            <FormattedMessage {...messages.saveHotelProfile} />
          </Button>
        </ButtonWrapper>
        <div className="row body-wrapper">
          <div className="col-sm-6 column-wrapper">
            <LeftContainer>
              <HotelPhotos />
              <HotelDescription />
            </LeftContainer>
          </div>
          <Right className="col-sm-6 column-wrapper">
            { this._hourlyRate() }
            { this._amenities() }
            { this._location() }
          </Right>
        </div>
      </div>
    );
  }
}

const LeftContainer = styled.div`
  padding: 20px;
  height: 100%
  border: 1px solid black;
`

const Right = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-between;
`
const Input = styled.input`
  width: 100px;
`

const CenteredDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
`

const ButtonWrapper = styled.div`
  position: absolute;
  top: 120px;
  right: 70px;
`

export default HotelProfile;
