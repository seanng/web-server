/*
 *
 * Account actions
 *
 */

import {
  SWITCH_VIEW,
  SET_EARNINGS_FILTER
} from './constants';

function switchView(view) {
	return {
		type: SWITCH_VIEW,
		view
	};
}

function setEarningsFilter(earningsFilter) {
	return {
		type: SET_EARNINGS_FILTER,
		earningsFilter
	};
}

export {
	switchView,
	setEarningsFilter
}
