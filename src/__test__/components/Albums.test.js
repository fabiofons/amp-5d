/**
 * @jest-environment node
 */
import 'jsdom-global/register';
import React from 'react';
import ConnectedAlbums from '../../components/Albums/AlbumsContainer';
import { render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import configureStore from 'redux-mock-store';

const mockStore = configureStore();

it('renders no albums when the store is empty', () => {
  const store = mockStore({ albums: [] });
  const wrapper = render(<MemoryRouter><ConnectedAlbums store={store} /></MemoryRouter>);
  expect(wrapper.find('.cover-albums').length).toBe(0);
});

it('renders artist from props', () => {
  const store = mockStore({ albums: [{id:10, name:'Album 1', image:'url_image'}, {id:11, name:'Album 2', image:'url_image'}] });
  const wrapper =  render(<MemoryRouter><ConnectedAlbums store={store} /></MemoryRouter>);
  expect(wrapper.find('.cover-albums').length).toBe(2);
});