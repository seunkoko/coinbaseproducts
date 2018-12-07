import React from 'react';

// third-party libraries
import { shallow } from 'enzyme';

// components
import Header from '../../Components/Header/Header.Component';

describe('Header', () => {

  it('renders the Header properly', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('nav').length).toEqual(1);
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('p').length).toEqual(2);
    expect(wrapper.find('.nav__header').length).toEqual(1);
    expect(wrapper.find('.donut__header').length).toEqual(1);
    expect(wrapper.find('.coinbase__header').length).toEqual(1);
    expect(wrapper).toMatchSnapshot();
  });
});
