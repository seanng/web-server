/*
 *
 * Login actions
 *
 */

import {
  LOGIN,
} from './constants';

export function login(info) {
  return {
    type: LOGIN,
    info,
  };
}
