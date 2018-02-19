import React from 'react';
import { PropTypes } from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = StyleSheet.create({
  answerRow: {
    flexDirection: 'row',
    flex: 1,
    display: 'flex',
    padding: '0.5rem',
    paddingTop: 0,
  },
  answerButton: {
    margin: '0.5rem',
    borderRadius: '1rem',
    justifyContent: 'center',
    flexGrow: 1,
    alignItems: 'center',
  },
  answerButtonText: {
    lineHeight: 0,
    fontSize: '10vw',
    color: 'white'
  }
});

const AnswerBar = ({ submitAnswer, frames }) => {
  const inputDisabled = frames.length < 2; // TODO: use game settings
  return(<View style={styles.answerRow}>
      <TouchableHighlight
        disabled={inputDisabled}
        onPress={submitAnswer}
        underlayColor='darkgreen'
        style={[
          styles.answerButton,
          {backgroundColor: inputDisabled ? 'gray' : 'green'}
        ]}
      >
        <Text style={styles.answerButtonText}>✔</Text>
      </TouchableHighlight>
      <TouchableHighlight
        disabled={inputDisabled}
        onPress={submitAnswer}
        underlayColor='darkred'
        style={[
          styles.answerButton,
          {backgroundColor: inputDisabled ? 'gray' : 'red'}
        ]}
      >
        <Text style={styles.answerButtonText}>✘</Text>
      </TouchableHighlight>
    </View>);
};

AnswerBar.propTypes = {
  submitAnswer: PropTypes.func,
};

export default AnswerBar;
