
import { fromJS } from 'immutable';
import reviewReducer from '../reducer';

describe('reviewReducer', () => {
  it('returns the initial state', () => {
    expect(reviewReducer(undefined, {})).toEqual(fromJS({}));
  });
});
