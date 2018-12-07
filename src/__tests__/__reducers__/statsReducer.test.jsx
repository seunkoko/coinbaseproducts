// types
import {
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
  GET_STATS_PENDING,
} from '../../actions/actionTypes';

// reducers
import { stats } from '../../reducers/statsReducer';

const oldState = {
  pending: false,
  data: {},
  error: {},
};
const statData = {
  open: 147.02000000,
  high: 147.02000000,
  low: 127.01000000,
  volume: 30971.13372658,
  last: 127.01000000,
  volume30day: 552204.71064685,
};

describe('Stats Reducer', () => {
  it('should return the default state if an action is not provided', () => {
    expect(stats(oldState, {})).toEqual(oldState);
  });

  it('should set pending to true if GET_STATS_PENDING is called', () => {
    const action = {
      pending: true,
      data: {},
      error: {},
    };

    const newState = stats(oldState, {
      data: {},
      pending: true,
      error: {},
      type: GET_STATS_PENDING,
    });

    expect(newState).toEqual(action);
  });

  it('should set error status to true if GET_STATS_FAILURE is called', () => {
    const action = {
      pending: false,
      data: {},
      error: {
        status: 429,
        message: 'Too many requests',
      },
    };

    const newState = stats(oldState, {
      error: {
        status: 429,
        message: 'Too many requests',
      },
      type: GET_STATS_FAILURE,
      pending: false,
    });

    expect(newState).toEqual(action);
  });

  it('should get stats if GET_STATS_SUCCESS is called', () => {
    const action = {
      pending: false,
      data: statData,
      error: {},
    };

    const newState = stats(oldState, {
      data: statData,
      type: GET_STATS_SUCCESS,
      pending: false,
    });

    expect(newState).toEqual(action);
  });
});
