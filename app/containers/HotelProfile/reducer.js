import { fromJS, Map } from 'immutable';
import {
  TOGGLE_HOTEL_POLICIES_MODE,
  GOT_HOTEL_INFO,
  EDIT_HOTEL_PROFILE,
  SAVED_HOTEL_PROFILE,
  SAVED_HOTEL_PROFILE_ERROR,
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

const initialState = fromJS({
  isEditingHotelPolicies: false,
  isEditingHotelProfile: false,
  hotelInfo: Map(),
  displayAmenitiesModal: false,
  displayLocationModal: false
});

function hotelProfileReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_HOTEL_POLICIES_MODE:
      const isEditingMode = state.get('isEditingHotelPolicies')
      return state.set('isEditingHotelPolicies', !isEditingMode);

    case GOT_HOTEL_INFO:
      return state
        .set('isEditingHotelProfile', false)
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
      return state
        .set('isEditingHotelProfile', false)
        .merge({ hotelInfo: action.hotelInfo })

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
        .updateIn(['hotelInfo', 'photos'], photos => photos.splice(action.index, 1));

    case SHOW_AMENITIES_MODAL:
      return state.set('displayAmenitiesModal', true);

    case HIDE_AMENITIES_MODAL:
      return state.set('displayAmenitiesModal', false);

    case SHOW_LOCATION_MODAL:
      return state.set('displayLocationModal', true);

    case HIDE_LOCATION_MODAL:
      return state.set('displayLocationModal', false);

    case UPDATE_AMENITIES:
      return state
        .set('isEditingHotelProfile', true)
        .updateIn(['hotelInfo', 'amenities'], amenities => action.amenities);
    
    case EDIT_RATE:
      return state
        .set('isEditingHotelProfile', true)
        .updateIn(['hotelInfo', 'rate'], rate => action.rate);
    
    case UPDATE_LOCATION:
      return state
        .set('isEditingHotelProfile', true)
        .updateIn(['hotelInfo', 'lat'], lat => action.location.lat)
        .updateIn(['hotelInfo', 'lng'], lng => action.location.lng)
        .updateIn(['hotelInfo', 'address'], address => action.location.address)

    default:
      return state;
  }
}

export default hotelProfileReducer;
