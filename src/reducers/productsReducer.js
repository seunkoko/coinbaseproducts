// actions
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_PENDING,
} from '../actions/actionTypes';

// reducers
import initialState from './initialState';

/**
 * product reducer
 *
 * @export
 * @param   {object} state  - initial state
 * @param   {object} action - action
 * @returns {object}        - reduced or initial state
 */
export const products = (state = initialState.products, action) => {
  switch (action.type) {
  case GET_PRODUCTS_SUCCESS:
    return {
      data: action.data,
      error: {},
      pending: action.pending,
    };

  case GET_PRODUCTS_FAILURE:
    return {
      data: [],
      error: action.error,
      pending: action.pending,
    };

  case GET_PRODUCTS_PENDING:
    return {
      data: [],
      error: action.error,
      pending: action.pending,
    };

  default:
    return state;
  }
};
