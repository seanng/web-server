/*
 *
 * HotelProfile actions
 *
 */

import {
  TOGGLE_HOTEL_POLICIES_MODE,
  GET_HOTEL_INFO,
  EDIT_HOTEL_PROFILE,
  SAVE_HOTEL_PROFILE,
  ADD_PHOTO,
  REARRANGE_PHOTOS,
  DELETE_PHOTO,
  SHOW_AMENITIES_MODAL,
  HIDE_AMENITIES_MODAL,
  SHOW_LOCATION_MODAL,
  HIDE_LOCATION_MODAL,
  UPDATE_AMENITIES,
  EDIT_RATE,
  UPDATE_LOCATION
} from './constants';

export function getHotelInfo(id) {
	return {
		type: GET_HOTEL_INFO,
		id
	}
}

export function toggleHotelPoliciesMode () {
  return {
    type: TOGGLE_HOTEL_POLICIES_MODE
  }
}

export function editHotelProfile (config) {
  return {
    type: EDIT_HOTEL_PROFILE,
    config
  }
}

export function rearrangePhotos (dragIndex, hoverIndex, dragPhoto) {
  return {
    type: REARRANGE_PHOTOS,
    dragIndex, hoverIndex, dragPhoto
  }
}

export function saveHotelProfile (hotelInfo) {
  return {
    type: SAVE_HOTEL_PROFILE,
    hotelInfo
  }
}


export function addPhoto (photo) {
  return {
    type: ADD_PHOTO,
    photo
  }
}

export function deletePhoto (index) {
  return {
    type: DELETE_PHOTO,
    index
  }
}

export function displayAmenitiesModal (tru) {
  if (tru) {
    return {
      type: SHOW_AMENITIES_MODAL
    }
  }
  return {
    type: HIDE_AMENITIES_MODAL
  }
}

export function displayLocationModal (tru) {
  if (tru) {
    return {
      type: SHOW_LOCATION_MODAL
    }
  }
  return {
    type: HIDE_LOCATION_MODAL
  }
}

export function updateAmenities (amenities) {
  return {
    type: UPDATE_AMENITIES,
    amenities
  }
}

export function editRate (rate) {
  return {
    type: EDIT_RATE,
    rate
  }
}

export function updateLocation (location) {
  return {
    type: UPDATE_LOCATION,
    location
  }
}
