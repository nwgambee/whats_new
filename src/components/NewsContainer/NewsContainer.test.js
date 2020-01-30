import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsContainer
      currentNews = {[1,2,3]}
          />);

    expect(wrapper).toMatchSnapshot();
  });
});
