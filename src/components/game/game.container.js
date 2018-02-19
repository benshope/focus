import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { gameStarted } from '../../redux/game/game.actions';
import Game from './game.component';

const mapDispatchToProps = dispatch => bindActionCreators({
  gameStarted,
}, dispatch);

export default connect(
  undefined,
  mapDispatchToProps
)(Game);
