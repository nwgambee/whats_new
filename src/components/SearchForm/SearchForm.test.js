import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './SearchForm';

describe('Form', () => {
  it('', () => {
    const wrapper = shallow(<    />);

    expect(wrapper).toMatchSnapshot();
  });
});
