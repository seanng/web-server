/*
 *
 * Review reducer
 *
 */

import { Map, List, fromJS } from 'immutable';
import {
  FETCH_STAYS,
  FETCH_CHARGES,
  ADD_CHARGE,
  HIDE_CHARGES_MODAL,
} from './constants';

const initialState = fromJS({
  stay: {},
  stays: [],
  charges: [],
  viewCharges: false,
  fetchStaysError: false,
  fetchChargesError: false,
});

function reviewReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STAYS:
      return state
        .set('stays', List())

    case 'FETCH_STAYS_SUCCESS':
      let fetchedStays = action.stays.map(stay => Map(stay))
      return state
        .set('stays', List(fetchedStays))
        .set('fetchStaysError', false)

    case 'FETCH_STAYS_ERROR':
      return state
        .set('fetchStaysError', true)

    case FETCH_CHARGES:
      let stays = state.get('stays');
      let stayIndex = stays.findIndex(stay => stay.get('id') === action.stayId);
      return state
        .set('stay', stays.get(stayIndex))

    case 'FETCH_CHARGES_SUCCESS':
      let newCharges = action.charges.map(charge => {
        charge.updated = true;
        return Map(charge);
      })
      return state
        .set('charges', List(newCharges))
        .set('fetchChargesError', false)
        .set('viewCharges', true)

    case 'FETCH_CHARGES_ERROR':
      return state
        .set('fetchChargesError', action.err)

    case ADD_CHARGE:
      return state
        .update('charges', charges => charges.set(charges.size, Map(action.charge)))

    case 'SAVE_CHARGES_SUCCESS':
      let updatedCharges = action.charges.map(charge => {
        charge.updated = true;
        return Map(charge);
      })
      return state
        .set('charges', List(updatedCharges))
        .set('fetchChargesError', false)
        .set('viewCharges', false)
        .update('stays', stays =>
          stays.update(stays.findIndex(stay =>
            stay.get('id') == action.stayId
          ), stay =>
            stay.set('totalCharge', action.newTotal)
          ))

    case HIDE_CHARGES_MODAL:
      return state
        .set('viewCharges', false)
        .set('charges', List())
        .set('stay', Map())

    default:
      return state;
  }
}

export default reviewReducer;
