import axios from 'axios';

import {
  GET_STATS_SUCCESS,
  GET_STATS_FAILURE,
  GET_STATS_PENDING,
} from './actionTypes';

/**
 * getStatsSuccess - Dispatch product stas
 *
 * @param   {object} data - data contains product stats
 * @returns {object} - an object containing the type and payload
 */
export const getStatsSuccess = (data) => ({
  type: GET_STATS_SUCCESS,
  data,
  pending: false,
});

/**
 * getStatsFailure- Dispatch error message on failure
 *
 * @param   {object} error - contains error
 * @returns {object} - an object containing the type and payload
 */
export const getStatsFailure = (error) => ({
  type: GET_STATS_FAILURE,
  error,
  pending: false,
});

/**
 * getStatsPending - Dispatch status for stats action
 *
 * @returns {object} - an object containing the type and payload
 */
export const getStatsPending = () => ({
  type: GET_STATS_PENDING,
  pending: true,
});

/**
 * STATS - Dispatch STATS after succesfully getting it
 *
 * @param {string} productId - product's Id
 * @param {function} dispatch - dispatch method
 * @returns {function}         - disapatch method depending on http response
 */
export const getStats = (productId) => (dispatch) => {
  dispatch(getStatsPending());
  return axios({
    method: 'get',
    url: `https://api.pro.coinbase.com/products/${productId}/stats`
  })
    .then(response => dispatch(getStatsSuccess(response.data)))
    .catch((error) => dispatch(getStatsFailure(error)));
};
