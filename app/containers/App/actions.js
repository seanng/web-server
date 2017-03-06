import io from 'socket.io-client';

import {
  TEST_SOCKET,
} from './constants';

export function testSocket() {
  return {
    type: TEST_SOCKET,
    data: 'hello,'
  }
}