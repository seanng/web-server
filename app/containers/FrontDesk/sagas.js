import { take, call, put, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { MAKE_AVAILABLE, CREATE_ROOM } from './constants';
import { roomCreationSuccess, roomCreationFailure } from './actions'

import request from 'utils/request';
import { FETCH_STAYS } from './constants';

export function* getPastStays() {
  // get the hotelId from token? or Redux store?
  const hotelId = 111;
  const requestURL = `/api/stays?hotel=${hotelId}`;

  try {
    const stays = yield call(request, requestURL)
    yield put(staysLoaded(stays));
  } catch (err) {
    yield put(staysLoadingError(err));
  }
}

// Individual exports for testing
export function* frontDeskWatcher() {
  const watcher = yield takeLatest(FETCH_STAYS, getPastStays);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  // frontDeskWatcher,
];
