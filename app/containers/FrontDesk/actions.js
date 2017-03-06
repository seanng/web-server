/*
 *
 * FrontDesk actions
 *
 */

import {
  SET_VIEW,
  SET_FILTER,
  SELECT_ADD_ROOM,
  CHECK_IN,
  MAKE_AVAILABLE,
  DELETE_ROOM,
  CREATE_ROOM,
  ROOM_CREATION_SUCCESS,
  ROOM_CREATION_FAILURE,
} from './constants';

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

function checkIn(stayId) {
  return {
    type: CHECK_IN,
    stayId
  };
}

function makeAvailable(roomNumber) {
  return {
    type: MAKE_AVAILABLE,
    roomNumber
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


export {
  setView,
  setFilter,
  selectAddRoom,
  checkIn,
  makeAvailable,
  createRoom,
  deleteRoom,
}