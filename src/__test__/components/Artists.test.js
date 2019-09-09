/**
 * @jest-environment node
 */
import 'jsdom-global/register';
import React from 'react';
import ConnectedArtists from '../../components/Artists/ArtistsContainer';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('renders no artist when the store is empty', () => {
  const store = mockStore({ artists: [] });
  const wrapper = render(<MemoryRouter><ConnectedArtists store={store} /></MemoryRouter>);
  expect(wrapper.find('.cover').length).toBe(0);
});

it('renders artist from props', () => {
  const store = mockStore({ artists: [{id:1, name:'Artist 1', image:'url_image'}, {id:2, name:'Artist 2', image:'url_image'}] });
  const wrapper =  render(<MemoryRouter><ConnectedArtists store={store} /></MemoryRouter>);
  expect(wrapper.find('.cover').length).toBe(2);
});
