/*
 *
 * HotelProfile
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getHotelInfo, toggleHotelPoliciesMode, editHotelProfile, addPhoto, rearrangePhotos, deletePhoto, displayAmenitiesModal, updateAmenities, editRate, displayLocationModal, updateLocation } from './actions';
import { selectHotelId } from 'containers/App/selectors'
import { selectHotelInfo, selectHotelPoliciesMode, selectDisplayAmenitiesModal, selectHotelAmenities, selectDisplayLocationModal } from './selectors';
import styled from 'styled-components';

import HotelPhotos from 'components/HotelPhotos';
import HotelPolicies from 'components/HotelPolicies';
import HotelLocation from 'components/HotelLocation';
import HotelAmenities from 'components/HotelAmenities';
import HotelHourlyRate from 'components/HotelHourlyRate';
import AddAmenitiesModal from 'components/AddAmenitiesModal';
import EditLocationModal from 'components/EditLocationModal';

export class HotelProfile extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor (props) {
    super(props)
    this.state = {
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

  decreaseRate = () => {
    const { editRate, hotel } = this.props
    editRate((hotel.rate * 1) - 10)
  }

  increaseRate = () => {
    const { editRate, hotel } = this.props
    editRate((hotel.rate * 1) + 10)
  }

  editRate = (e) => {
    this.props.editRate(e.target.value)
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
    const { toggleEditMode, hotel, isEditingPolicies, editHotelProfile, rearrangePhotos, displayAmenitiesModal, isAmenitiesModalDisplayed, updateAmenities, increaseRate, decreaseRate, isLocationModalDisplayed, displayLocationModal, updateLocation } = this.props
    return (
      <div className="row body-wrapper">
        <div className="col-sm-7 column-wrapper">
          <LeftContainer>
            <HotelPhotos
              addPhoto={this.addPhoto}
              photos={hotel.photos}
              rearrangePhotos={rearrangePhotos}
              deletePhoto={this.props.deletePhoto}
            />
            <HotelPolicies
              policies={hotel.policies}
              toggleEditMode={toggleEditMode}
              isEditingMode={isEditingPolicies}
              editHotelProfile={editHotelProfile}
            />
          </LeftContainer>
        </div>
        <Right className="col-sm-5">
          <HotelHourlyRate
            increase={this.increaseRate}
            decrease={this.decreaseRate}
            edit={this.editRate}
            value={hotel.rate}
          />
          <HotelAmenities 
            displayAmenitiesModal={displayAmenitiesModal} 
            amenities={hotel.amenities}
          />
          <HotelLocation 
            displayLocationModal={displayLocationModal}
            lat={hotel.lat}
            lng={hotel.lng}
          />
        </Right>
        <AddAmenitiesModal 
          displayAmenitiesModal={displayAmenitiesModal} 
          isShown={isAmenitiesModalDisplayed}
          amenities={hotel.amenities}
          updateAmenities={updateAmenities}
        />
        <EditLocationModal 
          displayLocationModal={displayLocationModal}
          isShown={isLocationModalDisplayed}
          address={hotel.address}
          updateLocation={updateLocation}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  hotel: selectHotelInfo(),
  hotelId: selectHotelId(),
  isEditingPolicies: selectHotelPoliciesMode(),
  isAmenitiesModalDisplayed: selectDisplayAmenitiesModal(),
  isLocationModalDisplayed: selectDisplayLocationModal()
});

const mapDispatchToProps = (dispatch) => ({
  fetchHotelInfo: (id) =>
    dispatch(getHotelInfo(id)),
  toggleEditMode: () =>
    dispatch(toggleHotelPoliciesMode()),
  editHotelProfile: (config) =>
    dispatch(editHotelProfile(config)),
  addPhoto: (photo) =>
    dispatch(addPhoto(photo)),
  rearrangePhotos: (dragIndex, hoverIndex, dragPhoto) =>
    dispatch(rearrangePhotos(dragIndex, hoverIndex, dragPhoto)),
  deletePhoto: (index) =>
    dispatch(deletePhoto(index)),
  displayAmenitiesModal: (bool) =>
    dispatch(displayAmenitiesModal(bool)),
  updateAmenities: (listOfAmenities) =>
    dispatch(updateAmenities(listOfAmenities)),
  editRate: (rate) =>
    dispatch(editRate(rate)),
  displayLocationModal: (bool) =>
    dispatch(displayLocationModal(bool)),
  updateLocation: (location) =>
    dispatch(updateLocation(location))
})

const LeftContainer = styled.div`

`

const Right = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: space-between;
`

export default connect(mapStateToProps, mapDispatchToProps)(HotelProfile);
