/*
 *
 * FrontDesk actions
 *
 */

import {
  SET_VIEW,
  ADD_ROOM,
} from './constants';

function setView(view) {
  return {
    type: SET_VIEW,
    view
  };
}

function addRoom(specs) {
  return {
    type: ADD_ROOM,
    specs
  };
}


export {
  setView,
  addRoom
}