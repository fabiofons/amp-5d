import { connect } from 'react-redux';

import Player from './Player';

const mapStateToProps = (state) => ({
  randomSong: state.randomSong,
});

export default connect(mapStateToProps)(Player);
