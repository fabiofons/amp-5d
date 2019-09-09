/**
 * @jest-environment node
 */
import 'jsdom-global/register';
import React from 'react';
import ConnectedSongs from '../../components/Songs/SongsContainer';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('renders no  when the store is empty', () => {
  const store = mockStore({ songs: [] });
  const wrapper = render(<MemoryRouter><ConnectedSongs store={store} /></MemoryRouter>);
  expect(wrapper.find('.track').length).toBe(0);
});

it('renders songs from props', () => {
  const store = mockStore({ songs: [{id:110, name:'Song 1', url:'url_image'}, {id:121, name:'Song 2', url:''}] });
  const wrapper = render(<MemoryRouter><ConnectedSongs store={store} /></MemoryRouter>);
  expect(wrapper.find('.track').length).toBe(2);
});
