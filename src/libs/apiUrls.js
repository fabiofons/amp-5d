const baseUrl = 'https://rubytify.herokuapp.com/api/v1';

export const GET_ARTISTS_URL = `${baseUrl}/artists`; 
export const GET_ALBUMS_URL = (artistId) => `${baseUrl}/artists/${artistId}/albums`; 
export const GET_SONGS_URL = (albumId) => `${baseUrl}/albums/${albumId}/songs`;
export const GET_GENRES_URL = `${baseUrl}/genres`; 
export const GET_RANDOM_SONG_URL = (genre) => `${baseUrl}/genres/${genre}/random_song`; 