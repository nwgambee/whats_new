import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('', () => {
    const wrapper = shallow(<    />);

    expect(wrapper).toMatchSnapshot();
  });
});
