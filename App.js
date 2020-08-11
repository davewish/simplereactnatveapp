/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
//importing redux
import {Provider} from 'react-redux';
import Store from './store/';
//importing pages/screens
import HomeScreen from './components/home';
import DataTable from './components/datatable';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          {
            // home Screen
          }
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{title: 'Home'}}
          />
          {
            // Data table Screen
          }
          <Stack.Screen
            name="DataTable"
            component={DataTable}
            options={{title: 'Data Table'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
