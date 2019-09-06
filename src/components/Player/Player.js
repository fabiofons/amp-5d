import React from 'react';

import './player.css';

class Player extends React.Component {
  constructor(props) {
    super(props);
    const state = props.location.state || {};
    const { url } = state;
    const randomUrl = props.randomSong.preview_url;

    this.state = {
      source: url || randomUrl
    }
  }
  render() {
    const state = this.props.location.state || {};
    const { songs } = state;
    const randomSongs = songs ? getRandomSongs(this.props) : [];
    return (
      <div className='container-player'>
        <audio controls className='centered' ref='audio'>
          <source src={this.state.source} type="audio/mpeg"></source>
        </audio>
        {songs && <div className='suggestions'>
          <h2>Suggestions</h2>
          {randomSongs.map(song => {
            return <div key={song.id} className='recomended' onClick={() => this.onPlaySuggestion(song.preview_url)}>
              {song.name}
            </div>
          })}
        </div>}
      </div>
    )
  };

  onPlaySuggestion = (newSong) => {
    this.setState({ source: newSong }, function(){
      this.refs.audio.pause();
      this.refs.audio.load();
      this.refs.audio.play();
    })
  };
};

const getRandomSongs = function(props) {
  const tracks = props.location.state.songs;
  let suggestions = tracks;
  const randomSongs = [];
  let i = suggestions.length;
  let j = 0;
 
  while(i) {
   j = Math.floor(Math.random() * (i));
   randomSongs.push(tracks[j]);
   suggestions.splice(j,1);
   if(randomSongs.length === 3){
    i = 1;
   }
   i--;
  }
  return randomSongs;
}

export default Player;