import { GET_GENRES_URL } from '../libs/apiUrls';

// Actions types
export const GET_GENRES = 'GET_GENRES';

// Actions to dispatch
export const getGenres = (albumId) => dispatch => fetch(GET_GENRES_URL)
.then(response => response.json())
.then(genres => {
  dispatch({
    type: GET_GENRES,
    payload: genres.data
  })
});  
