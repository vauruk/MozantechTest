/**
 * @format
 */

import React from 'react';
import {rootStore} from '../../store';
import {Provider} from 'react-redux';
import Home from '../Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
