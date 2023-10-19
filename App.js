import { StatusBar } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from "./components/Main"
import Loading from './components/Loading';
import Map from './components/Map';

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="loading" component={Loading} />
          <Stack.Screen
            options={{
              title: 'Positions',
              headerStyle: { backgroundColor: '#009688' },
              headerTintColor: '#ffffff',
              headerTitleStyle: { fontWeight: "bold" }
            }}
            name="main"
            component={Main} />
          <Stack.Screen
            options={{
              title: 'Map',
              headerStyle: { backgroundColor: '#009688' },
              headerTintColor: '#ffffff',
              headerTitleStyle: { fontWeight: "bold" }
            }}
            name="map"
            component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}