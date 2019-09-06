import { GET_SONGS_URL } from '../libs/apiUrls';
import { GET_RANDOM_SONG_URL } from '../libs/apiUrls';

// Actions types
export const GET_SONGS = 'GET_SONGS';
export const GET_RANDOM_SONG = 'GET_RANDOM_SONG';

// Actions to dispatch
export const getSongs = (albumId) => dispatch => fetch(GET_SONGS_URL(albumId))
.then(response => response.json())
.then(songs => {
  dispatch({
    type: GET_SONGS,
    payload: songs.data
  })
});   

export const getRandomSong = (genre) => dispatch => fetch(GET_RANDOM_SONG_URL(genre))
.then(response => response.json())
.then(track => {
  dispatch({
    type: GET_RANDOM_SONG,
    payload: track.data
  })
}); 