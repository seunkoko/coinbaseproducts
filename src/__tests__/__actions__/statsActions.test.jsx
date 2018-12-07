// third-party libraries
import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import thunk from 'redux-thunk';
import axios from 'axios';
import { stub } from 'sinon';

// actions
import {
  getStatsFailure,
  getStatsSuccess,
  getStatsPending,
  getStats,
} from '../../actions/statsActions';

// types
import {
  GET_STATS_PENDING,
  GET_STATS_FAILURE,
  GET_STATS_SUCCESS,
} from '../../actions/actionTypes';

const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const productId = 'BCH-USD';
const stats = {
  open: 147.02000000,
  high: 147.02000000,
  low: 127.01000000,
  volume: 30971.13372658,
  last: 127.01000000,
  volume30day: 552204.71064685,
};
const error = {
  status: 429,
  message: 'Too much public requests',
};
let store;

describe('Stats Actions - Dispatches', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => moxios.uninstall());

  it('should create an action on succesfully getting Stats', () => {
    const expectedAction = {
      type: GET_STATS_SUCCESS,
      pending: false,
      data: stats,
    };
    expect(getStatsSuccess(stats)).toEqual(expectedAction);
  });

  it('should create an action on getting an error when retreiving Statss', () => {
    const expectedAction = {
      type: GET_STATS_FAILURE,
      pending: false,
      error,
    };
    expect(getStatsFailure(error)).toEqual(expectedAction);
  });

  it('should create an action on pending', () => {
    const expectedAction = {
      type: GET_STATS_PENDING,
      pending: true,
    };
    expect(getStatsPending()).toEqual(expectedAction);
  });
});

describe('Stats Actions - getStats Action', () => {
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });

  afterEach(() => moxios.uninstall());

  it('dispatches GET_STATS_FAILURE when getting Stats is unsuccessful', () => {
    moxios.stubRequest('https://api.pro.coinbase.com/products/1/stats',
      { status: 500 });

    const expectedActions = [
      {
        pending: true,
        type:'GET_STATS_PENDING',
      },
      {
        error: new Error('Request failed with status code 500'),
        type: GET_STATS_FAILURE,
        pending: false,
      },
    ];

    store.dispatch(getStats('1')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches GET_STATS_SUCCESS when getting Statss is successful', (done) => {
    const response = stats;
    moxios.stubRequest(`https://api.pro.coinbase.com/products/${productId}/stats`, {
      status: 200,
      response,
    });

    const resolved = new Promise(dispatch => dispatch(response));
    const expectedActions = [
      {
        pending: true,
        type:'GET_STATS_PENDING',
      },
      {
        data: stats,
        pending: false,
        type: GET_STATS_SUCCESS,
      },
    ];

    stub(axios, 'get').callsFake(() => resolved);
    store.dispatch(getStats(productId))
      .then(() => {
        const actions = store.getActions();
        expect(actions).toEqual(expectedActions);
      })
      .then(done, done);
    done();
  });
});
