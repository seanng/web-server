import { fromJS } from 'immutable';
import {
  TOGGLE_HOTEL_DESCRIPTION_MODE,
  GOT_HOTEL_INFO
} from './constants';

const initialState = fromJS({
  isEditingHotelDescription: false,
  hotelInfo: null
});

function hotelProfileReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HOTEL_DESCRIPTION_MODE:
      const isEditingMode = state.get('isEditingHotelDescription')
      return state.set('isEditingHotelDescription', !isEditingMode)

    case GOT_HOTEL_INFO:
      console.log('retrieved the hotel info.', action.info)
      return state.set('hotelInfo', action.info)

    default:
      return state;
  }
}

export default hotelProfileReducer;
