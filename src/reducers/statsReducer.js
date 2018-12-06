// actions
import {
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
  GET_STATS_PENDING,
} from '../actions/actionTypes';

// reducers
import initialState from './initialState';

/**
 * stats reducer
 *
 * @export
 * @param   {object} state  - initial state
 * @param   {object} action - action
 * @returns {object}        - reduced or initial state
 */
export const stats = (state = initialState.stats, action) => {
  switch (action.type) {
  case GET_STATS_SUCCESS:
    return {
      data: action.data,
      error: {},
      pending: action.pending,
    };

  case GET_STATS_FAILURE:
    return {
      data: [],
      error: action.error,
      pending: action.pending,
    };

  case GET_STATS_PENDING:
    return {
      data: [],
      error: action.error,
      pending: action.pending,
    };

  default:
    return state;
  }
};
