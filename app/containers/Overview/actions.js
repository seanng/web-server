/*
 *
 * Overview actions
 *
 */

import {
  SET_FILTER,
  FETCH_ROOMS,
  CHECK_IN,
  MAKE_AVAILABLE,
  CREATE_ROOM,
  DELETE_ROOM,
  SELECT_ADD_ROOM_MODAL
} from './constants';

export function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
}

export function fetchRooms() {
  return {
    type: FETCH_ROOMS
  }
}


export function checkIn(roomNumber) {
  return {
    type: CHECK_IN,
    roomNumber
  };
}

export function makeAvailable(roomNumber, key) {
  return {
    type: MAKE_AVAILABLE,
    roomNumber,
    key
  };
}

export function displayAddRoomModal(display) {
  return {
    type: SELECT_ADD_ROOM_MODAL,
    display
  };
}

export function createRoom(roomNumber) {
  return {
    type: CREATE_ROOM,
    roomNumber
  }
}

export function deleteRoom(roomNumber) {
  return {
    type: DELETE_ROOM,
    roomNumber
  };
}
