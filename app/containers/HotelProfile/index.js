/*
 *
 * HotelProfile
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getHotelInfo, toggleHotelDescriptionMode, editHotelProfile, addPhoto, rearrangePhotos } from './actions'
import { selectHotelId } from 'containers/App/selectors'
import { selectHotelInfo, selectHotelDescriptionMode } from './selectors';
import styled from 'styled-components';

import HotelPhotos from 'components/HotelPhotos'
import HotelDescription from 'components/HotelDescription'
import HotelLocation from 'components/HotelLocation'
import HotelAmenities from 'components/HotelAmenities'
import HotelHourlyRate from 'components/HotelHourlyRate'

export class HotelProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props)
    this.state = {
      value: 4,
      loading: true
    }
  }

  componentDidMount () {
    const { fetchHotelInfo, hotelId } = this.props
    fetchHotelInfo(hotelId)
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.hotel) {
      this.setState({ loading: false })
    }
  }

  decreaseInput = () => {
    this.setState({ value: this.state.value - 1 })
  }

  increaseInput = () => {
    this.setState({ value: this.state.value + 1 })
  }

  editValue = (e) => {
    this.setState({ value: e.target.value })
    document.getElementById('testr').focus()
  }

  addPhoto = (e) => {
    if (this.props.hotel.photos.length < 6) {
      const file = e.target.files[0]
      const reader = new FileReader()
      const url = reader.readAsDataURL(file)
      reader.onloadend = (e) => {
        this.props.addPhoto(reader.result)
      }
    }
  }

  render () {
    if (this.state.loading) {
      return (
        <div>
          loading...
        </div>
      )
    }
    const { toggleEditMode, hotel, isEditingDescription, editHotelProfile, rearrangePhotos } = this.props
    return (
      <div className="row body-wrapper">
        <div className="col-sm-7 column-wrapper">
          <LeftContainer>
            <HotelPhotos
              addPhoto={this.addPhoto}
              photos={hotel.photos}
              rearrangePhotos={rearrangePhotos}
            />
            <HotelDescription
              description={hotel.description}
              toggleEditMode={toggleEditMode}
              isEditingMode={isEditingDescription}
              editHotelProfile={editHotelProfile}
            />
          </LeftContainer>
        </div>
        <Right className="col-sm-5 column-wrapper">
          <HotelHourlyRate
            increase={this.increaseInput}
            decrease={this.decreaseInput}
            edit={this.editInput}
            value={this.state.value}
          />
          <HotelAmenities />
          <HotelLocation />
        </Right>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hotel: selectHotelInfo(),
  hotelId: selectHotelId(),
  isEditingDescription: selectHotelDescriptionMode(),
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotelInfo: (id) =>
    dispatch(getHotelInfo(id)),
  toggleEditMode: () =>
    dispatch(toggleHotelDescriptionMode()),
  editHotelProfile: (config) =>
    dispatch(editHotelProfile(config)),
  addPhoto: (photo) =>
    dispatch(addPhoto(photo)),
  rearrangePhotos: (dragIndex, hoverIndex, dragPhoto) =>
    dispatch(rearrangePhotos(dragIndex, hoverIndex, dragPhoto))
})

const LeftContainer = styled.div`

`

const Right = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-between;
`

export default connect(mapStateToProps, mapDispatchToProps)(HotelProfile);
