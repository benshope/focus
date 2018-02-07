import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Game = ({
  // gamesState: { games },
}) => {
  return (
    <View style={styles.container}>
      <Text>the app is working and has redux observable</Text>
    </View>
  );
};

Game.propTypes = {
  // increment: PropTypes.func.isRequired,
};

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
