import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Squares from './squares.component';

const mapStateToProps = ({ game: { frames } }) => ({
  frames
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Squares);
