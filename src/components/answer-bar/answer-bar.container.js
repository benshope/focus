import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import answerBar from './answer-bar.component';

const mapStateToProps = ({ game: { frames } }) => ({
  frames
});

const mapDispatchToProps = dispatch => bindActionCreators({
  submitAnswer: () => console.log('TODO: get action here'),
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(answerBar);
