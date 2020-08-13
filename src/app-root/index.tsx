import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppRoot: React.SFC<Props> = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer />
    </>
  );
};

export default AppRoot;
