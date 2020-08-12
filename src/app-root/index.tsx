import React from "react";
import { StatusBar, StyleSheet, TouchableOpacity,View,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {tailwind} from 'tailwind';

const AppRoot = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
      </NavigationContainer>
    </>
  )
}

export default AppRoot;