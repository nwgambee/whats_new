import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<NewsArticle
        img='some file'
        headline='Denver Man Eats Bug'
        description='A denver man has eaten a bug'
        url='some url'
          />);

    expect(wrapper).toMatchSnapshot();
  });
});
