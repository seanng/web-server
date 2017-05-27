/*
 *
 * FrontDesk actions
 *
 */

import {
  SET_VIEW,
} from './constants';

function setView(view) {
  return {
    type: SET_VIEW,
    view
  };
}


export {
  setView,
}
