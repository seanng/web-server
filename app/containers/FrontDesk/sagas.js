import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { MAKE_AVAILABLE, CREATE_ROOM } from './constants';
import { roomCreationSuccess, roomCreationFailure } from './actions'

// Individual exports for testing
export function* frontDeskWatcher() {
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded
export default [
  frontDeskWatcher,
];
