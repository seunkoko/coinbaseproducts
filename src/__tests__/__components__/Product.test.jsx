import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Product from '../../Components/Products/Product.Component';

describe('Product', () => {
  let props = {
    baseCurrency: 'BCH',
    quoteCurrency: 0.01,
    baseMinSize: 0.01,
    baseMaxSize: 350,
    quoteIncrement: 0.01,
    status: 'online',
    minMarketFunds: 10,
    maxMarketFunds: 1000000,
  };

  it('renders the Product properly', () => {
    const wrapper = shallow(<Product />);

    expect(wrapper.find('.product__text').length).toEqual(2);
    expect(wrapper.find('.product__line').length).toEqual(1);
    expect(wrapper.find('.currency__type').length).toEqual(2);
    expect(wrapper.find('.product_details').length).toEqual(1);
    expect(wrapper.find('.product_details').length).toEqual(1);
    expect(wrapper.find('.product__description').length).toEqual(6);
    expect(wrapper.find('.product__description__row').length).toEqual(6);
    expect(wrapper.find('.product__description__title').length).toEqual(6);
    expect(wrapper.find('.product__description__container').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Product properly when props is passed', () => {
    const wrapper = shallow(<Product {...props} />);

    expect(wrapper.find('.product__text').length).toEqual(2);
    expect(wrapper.find('.product__line').length).toEqual(1);
    expect(wrapper.find('.currency__type').length).toEqual(2);
    expect(wrapper.find('.product_details').length).toEqual(1);
    expect(wrapper.find('.product_details').length).toEqual(1);
    expect(wrapper.find('.product__description').length).toEqual(6);
    expect(wrapper.find('.product__description__row').length).toEqual(6);
    expect(wrapper.find('.product__description__title').length).toEqual(6);
    expect(wrapper.find('.product__description__container').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Product properly when status is offline', () => {
    props = {
      ...props,
      status: 'offline',
    }
    const wrapper = shallow(<Product {...props} />);

    expect(wrapper.find('.product__text').length).toEqual(2);
    expect(wrapper.find('.product__line').length).toEqual(1);
    expect(wrapper.find('.currency__type').length).toEqual(2);
    expect(wrapper.find('.product_details').length).toEqual(1);
    expect(wrapper.find('.product_details').length).toEqual(1);
    expect(wrapper.find('.product__description').length).toEqual(6);
    expect(wrapper.find('.product__description__row').length).toEqual(6);
    expect(wrapper.find('.product__description__title').length).toEqual(6);
    expect(wrapper.find('.product__description__container').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
