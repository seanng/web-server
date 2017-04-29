/*
 *
 * Account actions
 *
 */

import {
  SWITCH_VIEW,
  SWITCH_SETTINGS_VIEW,
  SET_EARNINGS_FILTER,
	GET_HOTEL_INFO
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

export {
	switchSettingsView,
	switchView,
	setEarningsFilter
}
