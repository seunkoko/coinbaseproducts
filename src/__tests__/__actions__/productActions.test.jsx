// third-party libraries
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from 'axios';
import { stub } from 'sinon';

// actions
import {
  getProductFailure,
  getProductSuccess,
  getProductPending,
  getProducts,
} from '../../actions/productActions';

// types
import {
  GET_PRODUCTS_PENDING,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from '../../actions/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const products = [
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
const error = {
  status: 429,
  message: 'Too much public requests',
};
let store;

describe('Product Actions - Dispatches', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => moxios.uninstall());

  it('should create an action on succesfully getting Products', () => {
    const expectedAction = {
      type: GET_PRODUCTS_SUCCESS,
      pending: false,
      data: products,
    };
    expect(getProductSuccess(products)).toEqual(expectedAction);
  });

  it('should create an action on getting an error when retreiving Products', () => {
    const expectedAction = {
      type: GET_PRODUCTS_FAILURE,
      pending: false,
      error,
    };
    expect(getProductFailure(error)).toEqual(expectedAction);
  });

  it('should create an action on pending', () => {
    const expectedAction = {
      type: GET_PRODUCTS_PENDING,
      pending: true,
    };
    expect(getProductPending()).toEqual(expectedAction);
  });
});

describe('Product Actions - getProduct Action', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => moxios.uninstall());

  it('dispatches GET_PRODUCTS_FAILURE when getting products is unsuccessful', () => {
    moxios.stubRequest('https://api.pro.coinbase.com/products',
      { status: 500 });

    const expectedActions = [
      {
        pending: true,
        type:'GET_PRODUCTS_PENDING',
      },
      {
        error: new Error('Request failed with status code 500'),
        type: GET_PRODUCTS_FAILURE,
        pending: false,
      },
    ];

    store.dispatch(getProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches GET_PRODUCTS_SUCCESS when getting products is successful', (done) => {
    const response = products;
    moxios.stubRequest('https://api.pro.coinbase.com/products', {
      status: 200,
      response,
    });

    const resolved = new Promise(dispatch => dispatch(response));
    const expectedActions = [
      {
        pending: true,
        type:'GET_PRODUCTS_PENDING',
      },
      {
        data: products,
        pending: false,
        type: GET_PRODUCTS_SUCCESS,
      },
    ];

    stub(axios, 'get').callsFake(() => resolved);
    store.dispatch(getProducts('1'))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      })
      .then(done, done);
    done();
  });
});
