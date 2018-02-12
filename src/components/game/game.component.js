import React from 'react';
import { PropTypes } from 'prop-types';
import {
  // Button,
  StyleSheet,
  View,
  // ProgressBar,
  // Dimensions,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  progressBar: {
    height: 20
  },
  gridSquaresWrapper: {
    display: 'flex',
    flex: 2,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  gridSquare: {
    minWidth: '30%',
    margin: '1rem',
    borderRadius: '1rem',
    flexGrow: 1
  },
  yesNoRow: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
  },
  yesNoButton: {
    minWidth: '40%',
    margin: '1rem',
    borderRadius: '1rem',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
  },
  yesNoButtonText: {
    fontSize: '10vw',
    color: 'white'
  }
});

class Game extends React.Component {
  componentDidMount() {
    this.props.gameStarted();
  }

  render() {
    const emptyFunction = () => undefined;
    const frame = this.props.game.frames[0] || [...Array(9)];
    return (
      <View style={styles.container}>
        <View style={styles.gridSquaresWrapper}>
          {frame && frame.map((item, i) => (<View
            key={i}
            style={[
              styles.gridSquare,
              {backgroundColor: item ? '#c0c0c0' : '#f2f2f2'}
            ]}
          />))}
        </View>
        <View style={styles.yesNoRow}>
          <TouchableHighlight
            onPress={emptyFunction}
            underlayColor='darkgreen'
            style={[
              styles.yesNoButton,
              {backgroundColor: 'green'}
            ]}
          >
            <Text style={styles.yesNoButtonText}>✔</Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={emptyFunction}
            underlayColor='darkred'
            style={[
              styles.yesNoButton,
              {backgroundColor: 'red'}
            ]}
          >
            <Text style={styles.yesNoButtonText}>✘</Text>
          </TouchableHighlight>
        </View>
    </View>);
  }
}

Game.propTypes = {
  game: PropTypes.object,
};

export default Game;
