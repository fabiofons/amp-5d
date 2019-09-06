import React from 'react';
import Albums from '../components/Albums/Albums';
import { shallow } from 'enzyme';
import store from 'store';

it('renders without crashing', () => {
  shallow(<Albums />);
});