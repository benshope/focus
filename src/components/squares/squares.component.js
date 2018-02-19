import React from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  gridSquaresWrapper: {
    display: 'flex',
    flex: 3, // TODO: change to square root of grid size
    // flexGrow: 3,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: '0.5rem',
    paddingBottom: 0,
  },
  gridSquare: {
    minWidth: '26%',
    margin: '0.5rem',
    borderRadius: '1rem',
    flexGrow: 1
  }
});

const Squares = ({ frames }) => {
  const frame = frames[0] || [...Array(9)]
  return (
  <View style={styles.gridSquaresWrapper}>
    {frame && frame.map((item, i) => (<View
      key={i}
      style={[
        styles.gridSquare,
        {backgroundColor: item ? '#c0c0c0' : '#f2f2f2'}
      ]}
    />))}
  </View>);
};

Squares.propTypes = {
  squares: PropTypes.object,
};

export default Squares;
