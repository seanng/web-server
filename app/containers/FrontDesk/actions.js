/*
 *
 * FrontDesk actions
 *
 */

import {
  SET_VIEW,
  SET_FILTER,
  SELECT_ADD_ROOM,
  VIEW_CHARGES,
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

function viewCharges(stay) {
  return {
    type: VIEW_CHARGES,
    display
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



export {
  setView,
  setFilter,
  selectAddRoom,
  viewCharges,
  checkIn,
  makeAvailable,
  createRoom,
  deleteRoom,
  fetchStays,
  fetchRooms,
}