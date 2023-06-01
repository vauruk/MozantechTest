/**
 * @format
 */

import React from 'react';
import {rootStore} from '../../store';
import {Provider} from 'react-redux';
import Home from '../Home';

const App: React.FC = () => {
  return (
    <Provider store={rootStore}>
      <Home />
    </Provider>
  );
};

export default App;
