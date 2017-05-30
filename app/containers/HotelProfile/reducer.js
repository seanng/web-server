import { fromJS, Map } from 'immutable';
import {
  TOGGLE_HOTEL_DESCRIPTION_MODE,
  GOT_HOTEL_INFO,
  EDIT_HOTEL_PROFILE,
  SAVED_HOTEL_PROFILE,
  SAVED_HOTEL_PROFILE_ERROR
} from './constants';

const initialState = fromJS({
  isEditingHotelDescription: false,
  isEditingHotelProfile: false,
  hotelInfo: Map()
});

function hotelProfileReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HOTEL_DESCRIPTION_MODE:
      const isEditingMode = state.get('isEditingHotelDescription')
      return state.set('isEditingHotelDescription', !isEditingMode);

    case GOT_HOTEL_INFO:
      return state
        .merge({ hotelInfo: action.info });

    case EDIT_HOTEL_PROFILE:
      const s = state.get('hotelInfo').toJS()
      for (let key in action.config) {
        s[key] = action.config[key]
      }
      return state
        .set('isEditingHotelProfile', true)
        .merge({ hotelInfo: s });
    
    case SAVED_HOTEL_PROFILE:
      const { hotelInfo } = action
      console.log('the hotel info after saving :', hotelInfo)
      return state
        .set('isEditingHotelProfile', false)
        .merge({ hotelInfo })

    case SAVED_HOTEL_PROFILE_ERROR:
      console.log('there was an error', action.err)
      return state;

    default:
      return state;
  }
}

export default hotelProfileReducer;
