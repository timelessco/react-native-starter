import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import Config from 'react-native-config';
import { tw } from 'tailwind';

const AppRoot: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-black`}>{Config.ENV}</Text>
          <Text>Hello, World</Text>
        </View>
      </NavigationContainer>
    </>
  );
};

export default AppRoot;
