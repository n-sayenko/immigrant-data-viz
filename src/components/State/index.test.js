

import React from 'react';
import { shallow } from 'enzyme';
import State from './';

it('Test example', () => {
  const wrapper = shallow(<State />);
  expect(wrapper.is('ul')).toBeTruthy();
});
