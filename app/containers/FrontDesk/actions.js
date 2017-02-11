/*
 *
 * FrontDesk actions
 *
 */

import {
  SWITCH_VIEW,
  UPDATE_AVAILABILITY,
} from './constants';

function switchView(view) {
  return {
    type: SWITCH_VIEW,
    view
  };
}

function updateAvailability(vacancies) {
  return {
    type: UPDATE_AVAILABILITY,
    vacancies
  };
}

export {
  switchView,
  updateAvailability
}