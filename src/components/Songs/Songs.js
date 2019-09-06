import React from 'react';
import { Link } from 'react-router-dom';

import './songs.css';

class Songs extends React.Component {
  render() {
    return (
      <div className='container-songs'>
        {this.props.songs.map(song => {
          const url = song.preview_url;
          return (
            <div className='track' id={song.id} key={song.id}>
              {!url ? <p>No hay preview de canción</p> :             
              <Link
                to={{
                  pathname: '/music-player',
                  state: {
                    url:`${url}`,
                    songs: this.props.songs
                  }
                }}>
                {song.name}
              </Link>}
            </div>
          );
        })}
      </div>
    );
  }; 

  componentDidMount() {
    const { state } = this.props.location;
    const { getSongs } = this.props;
    const { id } = state;
    getSongs(id);
  };
};

export default Songs;
