import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Form from './SearchForm';

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
  wrapper = shallow(<Form
    onClick={jest.fn()}
    value='some query'
    onChange={jest.fn()}
       />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should update state when updateInput is called', () => {
    expect(wrapper.state()).toEqual({query: ''});
    let mockEvent = {target: {value: 'test query'}};

    wrapper.instance().updateInput(mockEvent);
    expect(wrapper.state('query')).toEqual('test query')
  })
});
