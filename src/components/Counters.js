import React, { PropTypes } from 'react'
import { StyleSheet, View, Text } from 'react-native';

import Counter from './Counter';
// import Button from './Button';

const Counters = ({
  // newCounter,
  // countersState: { counters },
  // decrement,
  // increment,
  // incrementWithDelay,
}) => {
  // const counterElems = Object.keys(counters).map((id) => {
  //   const value = counters[id];
  //   return (
  //     <Counter
  //       key={id}
  //     >
  //       {value}
  //     </Counter>
  //   );
  // })

  return (
    <View style={styles.container}>
      <Text>the app is working and has redux observable</Text>
      {/* {counterElems} */}
      {/* <Button style={styles.addBtn} onClick={newCounter}>Add New Counter</Button> */}
    </View>
  );
};

Counters.propTypes = {
  // countersState: PropTypes.any,
  // decrement: PropTypes.func.isRequired,
  // increment: PropTypes.func.isRequired,
  // incrementWithDelay: PropTypes.func.isRequired,
  // newCounter: PropTypes.func.isRequired,
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

export default Counters;
