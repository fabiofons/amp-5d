import { connect } from 'react-redux';
import { getArtists } from '../../actions/artists';
import Artists from './Artists';

const mapStateToProps = state => ({
  artists: state.artists
});

const mapDispatchToProps = {
  getArtists
}

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
