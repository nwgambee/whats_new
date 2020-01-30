import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Menu
      onClick={jest.fn()}
            />);

    expect(wrapper).toMatchSnapshot();
  });
});
