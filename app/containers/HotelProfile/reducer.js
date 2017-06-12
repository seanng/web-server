import { fromJS, Map } from 'immutable';
import {
  TOGGLE_HOTEL_DESCRIPTION_MODE,
  GOT_HOTEL_INFO,
  EDIT_HOTEL_PROFILE,
  SAVED_HOTEL_PROFILE,
  SAVED_HOTEL_PROFILE_ERROR,
  ADD_PHOTO,
  REARRANGE_PHOTOS,
  DELETE_PHOTO,
  SHOW_AMENITIES_MODAL,
  HIDE_AMENITIES_MODAL,
  UPDATE_AMENITIES
} from './constants';

const initialState = fromJS({
  isEditingHotelDescription: false,
  isEditingHotelProfile: false,
  hotelInfo: Map(),
  displayAmenitiesModal: false
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
      return state
        .set('isEditingHotelProfile', false)
        .merge({ hotelInfo })

    case SAVED_HOTEL_PROFILE_ERROR:
      console.log('there was an error', action.err)
      return state;

    case ADD_PHOTO:
      return state
        .updateIn(['hotelInfo', 'photos'], photos => photos.concat(action.photo))
        .set('isEditingHotelProfile', true)

    case REARRANGE_PHOTOS:
      const { dragIndex, hoverIndex, dragPhoto } = action
      return state
        .set('isEditingHotelProfile', true)
        .updateIn(['hotelInfo', 'photos'], photos => {
          photos = photos.splice(dragIndex, 1)
          photos = photos.splice(hoverIndex, 0, dragPhoto)
          return photos
        })

    case DELETE_PHOTO:
      return state
        .set('isEditingHotelProfile', true)
        .updateIn(['hotelInfo', 'photos'], photos => photos.splice(action.index, 1))

    case SHOW_AMENITIES_MODAL:
      return state.set('displayAmenitiesModal', true)

    case HIDE_AMENITIES_MODAL:
      return state.set('displayAmenitiesModal', false)

    case UPDATE_AMENITIES:
      return state
        .set('isEditingHotelProfile', true)
        .updateIn(['hotelInfo', 'amenities'], amenities => action.amenities )

    default:
      return state;
  }
}

export default hotelProfileReducer;
