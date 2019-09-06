import { connect } from 'react-redux';
import { getGenres } from '../../actions/genres';
import { getRandomSong } from '../../actions/songs';
import Home from './Home';

const mapStateToProps = state => {
  return {
    genres: state.genres
  }
}

const mapDispatchToProps = {
  getRandomSong,
  getGenres
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
