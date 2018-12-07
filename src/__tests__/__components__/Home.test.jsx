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
import ConnectedHome, { Home } from '../../Containers/Home';

// actions
// import { getProducts} from '../../actions/productActions';

const resolvePromise = () => Promise.resolve();

describe('Home', () => {
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
  let props = {
    products: products,
  };

  it('renders correctly when products are supplied', () => {
    const wrapper = mount(
      <Router>
        <Home
          {...props}
          getProducts={resolvePromise}
        />
      </Router>
    );
    const rendering = toJson(wrapper);
    expect(rendering).toMatchSnapshot();
  });

  // it('renders correctly when getProducts Action is supplied', () => {
  //   const wrapper = mount(
  //     <Router>
  //       <Home
  //         {...props}
  //         getProducts={getProducts}
  //       />
  //     </Router>
  //   );
  //   const rendering = toJson(wrapper);
  //   expect(rendering).toMatchSnapshot();
  // });

  it('renders correctly when connected to the store', () => {
    expect(
      mount(
        <Provider store={store}>
          <ConnectedHome
            {...props}
            getProducts={resolvePromise}
          />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  it('renders correctly when connected to the store and products are changed', () => {
    store = {
      ...store,
      products: {
        data: [ ...products ],
        error: {},
        pending: false,
      },
    };

    expect(
      mount(
        <Provider store={store}>
          <ConnectedHome
            {...props}
            getProducts={resolvePromise}
          />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  it('renders correctly when connected to the store and props is not empty', () => {
    const props = {
      products: {
        data: [ ...products ],
        error: {},
        pending: false,
      },
    }

    expect(
      mount(
        <Provider store={store}>
          <ConnectedHome
            {...props}
            getProducts={resolvePromise}
          />
        </Provider>
      ).exists()
    ).toBe(true);
  });

  it('should call handlePageClick method', () => {
    const wrapper = mount(
      <Home
        products={products}
        getProducts={resolvePromise}
      />
    );

    const data = { selected: 1 };
    const handlePageClickSpy = spy(wrapper.instance(), 'handlePageClick');
    wrapper.instance().handlePageClick(data);
    expect(handlePageClickSpy.called).toEqual(true);
  });
});
