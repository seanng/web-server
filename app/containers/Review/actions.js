/*
 *
 * Review actions
 *
 */

import {
  FETCH_STAYS,
  FETCH_CHARGES,
  SAVE_CHARGES,
  ADD_CHARGE,
  HIDE_CHARGES_MODAL,
} from './constants';

export function fetchStays() {
  return {
    type: FETCH_STAYS
  }
}

export function fetchCharges(stayId) {
  if (!stayId) {
    return {
      type: HIDE_CHARGES_MODAL
    }
  }
  return {
    type: FETCH_CHARGES,
    stayId
  };
}

export function addCharge(charge) {
  return {
    type: ADD_CHARGE,
    charge
  }
}

export function saveCharges(charges, newTotal, stayId) {
  return {
    type: SAVE_CHARGES,
    charges,
    newTotal,
    stayId
  }
}
