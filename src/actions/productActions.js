import axios from 'axios';

import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_PENDING,
} from './actionTypes';

/**
 * getProductSuccess - Dispatch products
 *
 * @param   {object} data - data contains products
 * @returns {object} - an object containing the type and payload
 */
export const getProductSuccess = (data) => ({
  type: GET_PRODUCTS_SUCCESS,
  data,
  pending: false,
});

/**
 * getProductFailure- Dispatch error message on failure
 *
 * @param   {object} error - contains error
 * @returns {object} - an object containing the type and payload
 */
export const getProductFailure = (error) => ({
  type: GET_PRODUCTS_FAILURE,
  error,
  pending: false,
});

/**
 * getProductPending - Dispatch status for product action
 *
 * @returns {object} - an object containing the type and payload
 */
export const getProductPending = () => ({
  type: GET_PRODUCTS_PENDING,
  pending: true,
});

/**
 * PRODUCT - Dispatch products after succesfully getting it
 *
 * @param {function} dispatch - dispatch method
 * @returns {function}         - disapatch method depending on http response
 */
export const getProducts = () => (dispatch) => {
  dispatch(getProductPending());
  return axios({
    method: 'get',
    url: 'https://api.pro.coinbase.com/products'
  })
    .then(response => dispatch(getProductSuccess(response.data)))
    .catch((error) => dispatch(getProductFailure(error)));
};
