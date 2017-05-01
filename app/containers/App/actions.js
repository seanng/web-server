import io from 'socket.io-client';

import {
  TEST_SOCKET,
  GET_CURRENT_USER
} from './constants';

export function testSocket() {
  return {
    type: TEST_SOCKET,
    data: 'hello,'
  }
}

export function getCurrentUser (token) {
  return {
    type: GET_CURRENT_USER,
    token
  }
}
