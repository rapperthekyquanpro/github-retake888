import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TagNavigator from './scr/navigation/TagNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <TagNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default App;
