import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('', () => {
    const wrapper = shallow(<    />);

    expect(wrapper).toMatchSnapshot();
  });
});
