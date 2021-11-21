
import React, { useState, useReducer } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

import { useForm, useController } from "react-hook-form";
import Item from '../components/ItemComponent';
import LoginButton from '../components/LoginButton';

const NotificationScreen = () => {
  return (
    <View>
      <Text>hello anh em</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    width: "100%"
  }
});

export default NotificationScreen;
