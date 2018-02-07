import React from 'react';
import { Provider } from 'react-redux';

import createStore from './redux';
import Game from './components/game';

const store = createStore();

const Main = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default Main;
