// types
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_PENDING,
} from '../../actions/actionTypes';

// reducers
import { products } from '../../reducers/productsReducer';

const oldState = {
  pending: false,
  data: [],
  error: {},
};
const productData = [
  {
      "id": "BCH-USD",
      "base_currency": "BCH",
      "quote_currency": "USD",
      "base_min_size": "0.01",
      "base_max_size": "350",
      "quote_increment": "0.01",
      "display_name": "BCH/USD",
      "status": "online",
      "min_market_funds": "10",
      "max_market_funds": "1000000",
  },
  {
      "id": "BCH-BTC",
      "base_currency": "BCH",
      "quote_currency": "BTC",
      "base_min_size": "0.01",
      "base_max_size": "200",
      "quote_increment": "0.00001",
      "display_name": "BCH/BTC",
      "status": "online",
      "min_market_funds": "0.001",
      "max_market_funds": "30",
  },
  {
      "id": "BCH-GBP",
      "base_currency": "BCH",
      "quote_currency": "GBP",
      "base_min_size": "0.01",
      "base_max_size": "120",
      "quote_increment": "0.01",
      "display_name": "BCH/GBP",
      "status": "online",
      "min_market_funds": "10",
      "max_market_funds": "1000000",
  },
];

describe('Product Reducer', () => {
  it('should return the default state if an action is not provided', () => {
    expect(products(oldState, {})).toEqual(oldState);
  });

  it('should set pending to true if GET_PRODUCTS_PENDING is called', () => {
    const action = {
      pending: true,
      data: [],
      error: {},
    };

    const newState = products(oldState, {
      data: [],
      pending: true,
      error: {},
      type: GET_PRODUCTS_PENDING,
    });

    expect(newState).toEqual(action);
  });

  it('should set error status to true if GET_PRODUCTS_FAILURE is called', () => {
    const action = {
      pending: false,
      data: [],
      error: {
        status: 429,
        message: 'Too many requests',
      },
    };

    const newState = products(oldState, {
      error: {
        status: 429,
        message: 'Too many requests',
      },
      type: GET_PRODUCTS_FAILURE,
      pending: false,
    });

    expect(newState).toEqual(action);
  });

  it('should get products if GET_PRODUCTS_SUCCESS is called', () => {
    const action = {
      pending: false,
      data: productData,
      error: {},
    };

    const newState = products(oldState, {
      data: productData,
      type: GET_PRODUCTS_SUCCESS,
      pending: false,
    });

    expect(newState).toEqual(action);
  });
});
