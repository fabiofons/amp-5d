import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { GET_ARTISTS } from './actions/artists';
import { GET_ALBUMS } from './actions/albums';
import { GET_SONGS, GET_RANDOM_SONG } from './actions/songs';
import { GET_GENRES } from './actions/genres';

const reducer = (state, action) => {
  if(action.type === GET_ARTISTS) {
    return { 
      ...state,
      artists: action.payload
    }
  }

  if(action.type === GET_ALBUMS) {
    return { 
      ...state,
      albums: action.payload
    }
  }

  if(action.type === GET_SONGS) {
    return {
      ...state,
      songs: action.payload
    }
  }

  if(action.type === GET_RANDOM_SONG) {
    return {
      ...state,
      randomSong: action.payload
    }
  }

  if(action.type === GET_GENRES) {
    return {
      ...state,
      genres: action.payload
    }
  }

  return state;

};

export default createStore(reducer, { artists: [], albums: [], genres: '', randomSong: {}, songs: [] }, applyMiddleware(thunk));