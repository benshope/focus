import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Game extends React.Component {
  componentDidMount() {
    this.props.gameStarted();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Game: {this.props.game && this.props.game.game}</Text>
      </View>
    );
  }
}

// Game.propTypes = {
//   game: PropTypes.array,
//   gameStarted: PropTypes.func,
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
  addBtn: {
    marginTop: 50,
  },
});

export default Game;
