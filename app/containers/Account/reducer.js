/*
 *
 * Account reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SWITCH_VIEW,
  SWITCH_SETTINGS_VIEW,
  SET_EARNINGS_FILTER,
  TOGGLE_HOTEL_DESCRIPTION_MODE,
  GOT_HOTEL_INFO
} from './constants';

const initialState = fromJS({
	view: 'earnings',
  settingsView: '',
	earningsFilter: '',
  isEditingHotelDescription: false,
  hotelInfo: null
});

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case SWITCH_VIEW:
      return state.set('view', action.view);

    case SWITCH_SETTINGS_VIEW:
      return state.set('settingsView', action.view);

    case SET_EARNINGS_FILTER:
      return state.set('earningsFilter', action.earningsFilter);

    case GOT_HOTEL_INFO:
      console.log('got hotel info in reducer!')
      return state.set('hotelInfo', action.info)

    case TOGGLE_HOTEL_DESCRIPTION_MODE:
      const isEditingMode = state.get('isEditingHotelDescription')
      return state.set('isEditingHotelDescription', !isEditingMode)

    default:
      return state;
  }
}

export default accountReducer;
