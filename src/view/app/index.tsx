/**
 * @format
 */

import React from 'react';
import {rootStore} from '../../store';
import {Provider} from 'react-redux';
import Home from '../Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import PostView from '../PostView';
import {PathNav} from './types';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={PathNav.HOME} component={Home} />
          <Stack.Screen name={PathNav.POST_VIEW} component={PostView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
