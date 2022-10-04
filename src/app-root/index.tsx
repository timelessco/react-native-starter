import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppRoot: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <View className="flex-1 justify-center items-center">
          <Text>Hello, World</Text>
        </View>
      </NavigationContainer>
    </>
  );
};

export default AppRoot;
