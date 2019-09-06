import React from 'react';
import Artists from '../components/Artists/Artists';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Artists />);
});