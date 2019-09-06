import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.css';

class Home extends Component {
  render() {
    return(
      <div>
        <div className='container-home'>
          <h1>Welcome to Ayenda Music Player</h1>
          <button onClick={this.onGetRandomSong}>Play Random Song</button>
          <h2>Browse music for:</h2>
          <div className='links'>
            <Link to='/artists'>Artists</Link>
          </div>
        </div>
      </div>
    )
  };

  onGetRandomSong = () => {
    const { getRandomSong, genres, history: { push } } = this.props;
    const randomGenre = genres[Math.floor(Math.random() * genres.length)];
    getRandomSong(randomGenre).then(() => push('/music-player'));
  };

  componentDidMount() {
    const { getGenres } = this.props;
    getGenres();
  };
};

export default Home;
