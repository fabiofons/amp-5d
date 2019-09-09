import React from 'react';
import { NavLink } from 'react-router-dom';

import './artists.css';

class Artists extends React.Component {
  render() {
    return (
      <div className='container-artist'>
        {this.props.artists.map(artist => {
          const id = artist.id
          return (
            <div className='cover' id={artist.id} key={artist.id}>              
              <img src={artist.image} alt={artist.name}/>
                <NavLink className='centered'
                  to={{
                    pathname: '/albums',
                    state: {
                      id:`${id}`
                    }
                  }}
                >
                  {artist.name}
                </NavLink>
            </div>
          );
        })}
      </div>
    );
  }; 

  componentDidMount() {
    const { getArtists } = this.props;
    getArtists();
  };
};

export default Artists;
