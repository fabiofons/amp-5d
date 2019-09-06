import React from 'react';
import Songs from '../components/Songs/Songs';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Songs />);
});