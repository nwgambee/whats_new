import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
  wrapper = shallow(<App
    changeSource={jest.fn()}
    search={jest.fn()}
    currentNews={[]}
    />);
  });
  it('should match the snapshot with all data passed through correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('state.currentNewsSource should be updated when changeSource is called', () => {
    expect(wrapper.state('currentNewsSource')).toEqual('local');
    let mockEvent = {target: {name: 'science'}};
    wrapper.instance().changeSource(mockEvent);
    expect(wrapper.state('currentNewsSource')).toEqual('science');
  });
});
