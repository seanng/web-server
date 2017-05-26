/*
 *
 * Account actions
 *
 */

import {
  SWITCH_VIEW,
  SWITCH_SETTINGS_VIEW,
  SET_EARNINGS_FILTER,
	GET_HOTEL_INFO,
	TOGGLE_HOTEL_DESCRIPTION_MODE
} from './constants';

function switchView(view) {
	return {
		type: SWITCH_VIEW,
		view
	};
}

function switchSettingsView(view) {
	return {
		type: SWITCH_SETTINGS_VIEW,
		view
	};
}

function setEarningsFilter(earningsFilter) {
	return {
		type: SET_EARNINGS_FILTER,
		earningsFilter
	};
}

function getHotelInfo(id) {
	return {
		type: GET_HOTEL_INFO,
		id
	}
}

function toggleHotelDescriptionMode () {
  return {
    type: TOGGLE_HOTEL_DESCRIPTION_MODE
  }
}

export {
	switchSettingsView,
	switchView,
	setEarningsFilter,
	getHotelInfo,
	toggleHotelDescriptionMode
}
