import { GET_ALBUMS_URL } from '../libs/apiUrls';

// Action type
export const GET_ALBUMS = 'GET_ALBUMS';

// Actions to dispatch
export const getAlbums = (artistId) => dispatch => fetch(GET_ALBUMS_URL(artistId))
  .then(response => response.json())
  .then(albums => {
    dispatch({
      type: GET_ALBUMS,
      payload: albums.data
    })
  });
  