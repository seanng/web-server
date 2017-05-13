import io from 'socket.io-client';

import {
  TEST_SOCKET,
  GET_CURRENT_USER,
  TOKEN_INVALID
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

export function tokenNotValid () {
  console.log('dispatching token invalid')
  return {
    type: TOKEN_INVALID
  }
}
