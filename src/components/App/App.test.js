import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('', () => {
    const wrapper = shallow(<    />);

    expect(wrapper).toMatchSnapshot();
  });
});
