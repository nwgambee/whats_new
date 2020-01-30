import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
  it('', () => {
    const wrapper = shallow(<    />);

    expect(wrapper).toMatchSnapshot();
  });
});
