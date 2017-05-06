import { take, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { SUCCESS } from './constants';
import { selectNextPathName } from './selectors';
import { makeSelectCurrentUser } from '../App/selectors';

// Individual exports for testing
export function* routeToPath() {
  const nextPathName = yield select(selectNextPathName);
  
  if (nextPathName) {
    yield put(push(nextPathName))
  } else {
    yield put(push('/'))
  }
}

export function* loginWatcher() {
  const watcher = yield takeLatest(SUCCESS, routeToPath);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// All sagas to be loaded
export default [
  // loginWatcher,
];
