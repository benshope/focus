import React, { PropTypes } from 'react';
import { StyleSheet, View, Text } from 'react-native';

// import Button from './Button'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    width: 40,
    textAlign: 'center',
  },
});

const Counter = ({ }) => {
  return (
    <View style={styles.container}>
      {/* <Button onClick={decrementFn}>-</Button> */}
      <Text style={styles.label}>Hello</Text>
      {/* <Button onClick={incrementFn}>+</Button> */}
      {/* <Button onClick={incrementWithDelayFn}>+ with delay</Button> */}
    </View>
  );
};

Counter.propTypes = {
  // decrementFn: PropTypes.func.isRequired,
  // children: PropTypes.number,
  // incrementFn: PropTypes.func.isRequired,
  // incrementWithDelayFn: PropTypes.func.isRequired,
};

export default Counter;
