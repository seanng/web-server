/*
 *
 * FrontDesk actions
 *
 */

import {
  SET_VIEW,
  SELECT_ADD_ROOM,
} from './constants';

function setView(view) {
  return {
    type: SET_VIEW,
    view
  };
}

function selectAddRoom(display) {
  return {
    type: SELECT_ADD_ROOM,
    display
  };
}


export {
  setView,
  selectAddRoom,
}