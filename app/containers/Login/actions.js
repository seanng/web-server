/*
 *
 * Login actions
 *
 */

import {
  DEFAULT_ACTION,
  LOGIN,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function login(info) {
  return {
    type: LOGIN,
    info
  };
}
