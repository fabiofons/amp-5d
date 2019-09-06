import { connect } from 'react-redux';
import { getSongs } from '../../actions/songs';
import Songs from './Songs';

const mapStateToProps = ({ songs }) => ({ 
  songs
});

const mapDispatchToProps = (dispatch) => {
  return {
    getSongs: (albumId) => dispatch(getSongs(albumId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Songs);
