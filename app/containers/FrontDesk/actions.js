/*
 *
 * FrontDesk actions
 *
 */

import {
  ADD_CHARGE,
  SAVE_CHARGES,
  SET_VIEW,
  SET_FILTER,
  SELECT_ADD_ROOM,
  FETCH_CHARGES,
  HIDE_CHARGES_MODAL,
  CHECK_IN,
  MAKE_AVAILABLE,
  DELETE_ROOM,
  CREATE_ROOM,
  FETCH_ROOMS,
  FETCH_STAYS,
} from './constants';

function fetchRooms() {
  return {
    type: FETCH_ROOMS
  }
}

function setView(view) {
  return {
    type: SET_VIEW,
    view
  };
}

function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
}

function selectAddRoom(display) {
  return {
    type: SELECT_ADD_ROOM,
    display
  };
}

function fetchCharges(stayId) {
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

function checkIn(roomNumber) {
  return {
    type: CHECK_IN,
    roomNumber
  };
}

function makeAvailable(roomNumber, key) {
  return {
    type: MAKE_AVAILABLE,
    roomNumber,
    key
  };
}

function createRoom(roomNumber) {
  return {
    type: CREATE_ROOM,
    roomNumber
  }
}

function deleteRoom(roomNumber) {
  return {
    type: DELETE_ROOM,
    roomNumber
  };
}

function fetchStays() {
  return {
    type: FETCH_STAYS
  }
}

function addCharge(charge) {
  return {
    type: ADD_CHARGE,
    charge
  }
}

function saveCharges(charges) {
  return {
    type: SAVE_CHARGES,
    charges
  }
}

export {
  setView,
  setFilter,
  selectAddRoom,
  fetchCharges,
  checkIn,
  makeAvailable,
  createRoom,
  deleteRoom,
  fetchStays,
  fetchRooms,
  addCharge,
  saveCharges,
}
