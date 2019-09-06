import { GET_ARTISTS_URL } from '../libs/apiUrls';
// Actions types
export const GET_ARTISTS = 'GET_ARTISTS';

// Actions to dispatch
export const getArtists = () => dispatch => fetch(GET_ARTISTS_URL)
  .then(response => response.json())
  .then(artists => {
    dispatch({
      type: GET_ARTISTS,
      payload: artists.data
    })
  });   
  