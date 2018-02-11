import React from 'react';
import { PropTypes } from 'prop-types';
import {
  // Button,
  StyleSheet,
  View,
  ProgressBar,
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
  yesNoRow: {
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  yesNoButton: {
    flexBasis: '33%',
    flexGrow: 1,
  }
});

class Game extends React.Component {
  componentDidMount() {
    this.props.gameStarted();
  }


  render() {
    const emptyFunction = () => undefined;
    const items = [true, false, false, true, true, false, false, true, true];
    return (
      <View style={styles.container}>
        <ProgressBar
          color="#1DA1F2"
          progress={0.33}
          style={styles.progressBar}
          trackColor="#D1E3F6"
        />
        <Text>Game: {this.props.game && this.props.game.game}</Text>
        <View style={{
          display: 'flex',
          flex: 2,
          flexWrap: 'wrap',
          flexDirection: 'row' }}
        >
          {items.map((item, i) => (<View
            key={i}
            style={{
              flex: 0.2,
              // flexBasis: '30%',
              minWidth: '33%',
              flexGrow: 1,
              border: '1px solid red',
              backgroundColor: item ? 'blue' : 'yellow'
            }} />))}
        </View>
        <View style={styles.yesNoRow}>
            <TouchableHighlight
              onPress={emptyFunction}
              underlayColor='#1B95E0'
            >
              <Text>✔</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={emptyFunction}
              underlayColor='#1B95E0'
            >
              <Text>✘</Text>
            </TouchableHighlight>
            {/* <Button
              color="green"
              onPress={emptyFunction}
              title="✔"
              style={styles.yesNoButton}
            />
            <Button
              color="red"
              onPress={emptyFunction}
              title="✘"
              style={styles.yesNoButton}
            /> */}
        </View>
      </View>
    );
  }
}

Game.propTypes = {
  game: PropTypes.object,
};

export default Game;
