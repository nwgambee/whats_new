import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should match the snapshot with all data passed through correctly', () => {
    const wrapper = shallow(<App
      changeSource={jest.fn()}
      search={jest.fn()}
      currentNews={[]}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
