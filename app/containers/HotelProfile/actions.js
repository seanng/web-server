/*
 *
 * HotelProfile actions
 *
 */

import {
  TOGGLE_HOTEL_DESCRIPTION_MODE,
  GET_HOTEL_INFO,
  EDIT_HOTEL_PROFILE,
  SAVE_HOTEL_PROFILE,
  ADD_PHOTO,
  REARRANGE_PHOTOS,
  DELETE_PHOTO
} from './constants';

export function getHotelInfo(id) {
	return {
		type: GET_HOTEL_INFO,
		id
	}
}

export function toggleHotelDescriptionMode () {
  return {
    type: TOGGLE_HOTEL_DESCRIPTION_MODE
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
