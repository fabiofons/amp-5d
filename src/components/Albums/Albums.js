import React from 'react';
import { Link } from 'react-router-dom';
import './albums.css';

class Albums extends React.Component {
  render() {
    return (
      <div className='container-albums'>
        {this.props.albums.map(album => {
          const id = album.id
          return (
            <div className='cover-albums' id={album.id} key={album.id}>              
              <img src={album.image} alt={album.name}/>
              <div className='title'>
                <Link className='bottom'
                  to={{
                    pathname: '/songs',
                    state: {
                      id:`${id}`
                    }
                  }}>
                  {album.name}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  componentDidMount() {
    const { state } = this.props.location;
    const { getAlbums } = this.props;
    const { id } = state;
    getAlbums(id);
  };
};

export default Albums;
