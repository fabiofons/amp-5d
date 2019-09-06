import { connect } from 'react-redux';
import { getAlbums } from '../../actions/albums';
import Albums from './Albums';

const mapStateToProps = state => ({
  albums: state.albums
});

const mapDispatchToProps = {
  getAlbums
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
