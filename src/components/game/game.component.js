import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, View } from 'react-native';

import Squares from '../squares';
import AnswerBar from '../answer-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  }
});

class Game extends React.Component {
  componentDidMount() {
    this.props.gameStarted();
  }

  render() {
    return (
      <View style={styles.container}>
        <Squares />
        <AnswerBar />
      </View>);
  }
}

Game.propTypes = {
  gameStarted: PropTypes.func,
};

export default Game;
