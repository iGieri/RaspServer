/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Loading from "./Loading";
import Service from "./Service";

console.disableYellowBox = true;

const Stack = createStackNavigator();

const Gabbot = () => <Service title="Gabbot" description="Discord Bot" image={require("./images/gabboh.jpeg")} />

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Gabbot" component={Gabbot} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}