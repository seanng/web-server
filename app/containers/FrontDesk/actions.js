/*
 *
 * FrontDesk actions
 *
 */

import {
  SWITCH_VIEW,
} from './constants';

function switchView(view) {
  return {
    type: SWITCH_VIEW,
    view
  };
}

export {
  switchView
}