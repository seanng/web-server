/*
 *
 * HotelProfile actions
 *
 */

import {
  TOGGLE_HOTEL_DESCRIPTION_MODE,
  GET_HOTEL_INFO
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