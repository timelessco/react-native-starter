import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { tailwind } from 'tailwind';

const AppRoot: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <View style={tailwind('flex-1 justify-center items-center')}>
          <Text>Hello, World</Text>
        </View>
      </NavigationContainer>
    </>
  );
};

export default AppRoot;
