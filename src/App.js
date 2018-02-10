import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './redux';
import Game from './components/game';
const store = createStore();

const App = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default App;

