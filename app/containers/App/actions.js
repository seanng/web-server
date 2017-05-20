import io from 'socket.io-client';

import {
  TEST_SOCKET,
  CHECK_AUTH,
  LOGOUT
} from './constants';

export function testSocket() {
  return {
    type: TEST_SOCKET,
    data: 'hello,'
  }
}

export function checkAuth (token) {
  return {
    type: CHECK_AUTH,
    token
  }
}

export function logout () {
  return {
    type: LOGOUT
  }
}
