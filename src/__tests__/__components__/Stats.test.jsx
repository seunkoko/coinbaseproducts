import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Stats from '../../Components/Stats/Stats.Component';

describe('Product', () => {
  let props = {
    displayName: 'BCH/USD',
    open: 147.02000000,
    high: 147.02000000,
    low: 127.01000000,
    volume: 30971.13372658,
    last: 127.01000000,
    volume30day: 552204.71064685,
  };

  it('renders the Stats properly', () => {
    const wrapper = shallow(<Stats />);

    expect(wrapper.find('.stats__title').length).toEqual(1);
    expect(wrapper.find('.stats__row').length).toEqual(1);
    expect(wrapper.find('.stats__details').length).toEqual(6);
    expect(wrapper.find('.col-5').length).toEqual(12);
    expect(wrapper.find('.col-1').length).toEqual(6);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders the Product properly when props is passed', () => {
    const wrapper = shallow(<Stats {...props} />);

    expect(wrapper.find('.stats__title').length).toEqual(1);
    expect(wrapper.find('.stats__row').length).toEqual(1);
    expect(wrapper.find('.stats__details').length).toEqual(6);
    expect(wrapper.find('.col-5').length).toEqual(12);
    expect(wrapper.find('.col-1').length).toEqual(6);
    expect(wrapper).toMatchSnapshot();
  });
});
