import React from 'react';

// third-party libraries
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

// components
import Routes from '../../Routes';
import Home from '../../Containers/Home';

const resolvePromise = () => Promise.resolve();

describe('Routes', () => {
  const mockStore = configureMockStore([thunk]);
  const store = mockStore({
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

  it('renders correctly when connected to the store', () => {
    expect(
      mount(
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      ).exists()
    ).toBe(true);
  });

  it('redirects to the Landing Page `/`', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <Provider store={store}>
          <Home getProducts={resolvePromise} />
        </Provider>
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});
