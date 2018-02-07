import { connect } from 'react-redux';

import Game from './game.component';

const mapStateToProps = state => ({
  // gameState: state.game,
});
// const mapDispatchToProps = createActionDispatchers(actionCreators);

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Game);
