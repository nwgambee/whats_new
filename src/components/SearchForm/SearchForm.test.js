import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './SearchForm';

describe('Form', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Form
      onClick={jest.fn()}
      value='some query'
      onChange={jest.fn()}
         />);

    expect(wrapper).toMatchSnapshot();
  });
});
