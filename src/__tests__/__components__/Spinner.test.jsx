
import React from 'react';

// third-party libraries
import renderer from 'react-test-renderer';

// components
import Spinner from '../../Components/Spinner/Spinner.component';

describe('Spinner', () => {
  let component;
  beforeEach(() => {
    component = renderer
      .create(
        <Spinner />
      )
      .toJSON();
  });

  it('renders correctly when imported', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders a container div with className: sk-circle', () => {
    expect(component.props.className).toBe('sk-circle');
  });

  it('renders a 12 div\'s with className: sk-child', () => {
    expect(component.children).toHaveLength(12);
    component.children.forEach((child) => {
      expect(child.props.className).toContain('sk-child');
    });
  });
});