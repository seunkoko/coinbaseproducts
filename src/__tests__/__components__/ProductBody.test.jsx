import React from 'react';

// third-party libraries
import { BrowserRouter as Router } from 'react-router-dom';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import toJson from 'enzyme-to-json';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { spy } from 'sinon';

// components
import ConnectedProductBody, { ProductBody } from '../../Containers/ProductBody/ProductBody.Component';

const resolvePromise = () => Promise.resolve();

describe('ProductBody', () => {
  const mockStore = configureMockStore([thunk]);
  let store = mockStore({
    products: {
      data: [],
      error: {},
      pending: false,
    },
    stats: {
      data: {},
      error: {},
      pending: false,
    },
  });
  const product = {
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
  }
  const stats = {
    "open": "147.02000000",
    "high": "147.02000000",
    "low": "127.01000000",
    "volume": "30971.13372658",
    "last": "127.78000000",
    "volume_30day": "552204.71064685"
  };
  let props = {
    product,
    stats,
  };

  it('renders correctly when products and stats are supplied', () => {
    const wrapper = mount(
      <Router>
        <ProductBody
          {...props}
          stats={ { data: { ...stats } }}
          getStats={resolvePromise}
        />
      </Router>
    );
    const rendering = toJson(wrapper);
    expect(rendering).toMatchSnapshot();
  });

  it('renders correctly when connected to the store', () => {
    expect(
      mount(
        <Provider store={store}>
          <ConnectedProductBody
            {...props}
            getStats={resolvePromise}
          />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  it('renders correctly when connected to the store and products are changed', () => {
    store = {
      ...store,
      stats: {
        data: { ...stats },
        error: {},
        pending: false,
      },
    };

    expect(
      mount(
        <Provider store={store}>
          <ConnectedProductBody
            {...props}
            getStats={resolvePromise}
          />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  it('renders correctly when connected to the store and props is not empty', () => {
    props = {
      ...props,
      stats: {
        data: { ...stats },
        error: {},
        pending: false,
      },
    }

    expect(
      mount(
        <Provider store={store}>
          <ConnectedProductBody
            {...props}
            getStats={resolvePromise}
          />
        </Provider>
      ).exists()
    ).toBe(true);
  });
});
