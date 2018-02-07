import { bindActionCreators } from 'redux';
import { connect, dispatch } from 'react-redux';

import { gameStarted } from '../../redux/game/game.actions';
import Game from './game.component';

const mapStateToProps = ({game}) => ({
  game,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  gameStarted,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
