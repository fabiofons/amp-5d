import React from 'react';
import Player from '../components/Player/Player';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<Player />);
});