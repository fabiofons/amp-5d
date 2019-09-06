import React from 'react';
import Albums from '../components/Albums/Albums';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Albums />);
});