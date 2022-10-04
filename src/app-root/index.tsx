import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const AppRoot: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <View className="flex-1 justify-center items-center">
          <Text>Hello, World</Text>
          <Pressable className="rounded-lg bg-blue-500 px-3 py-1">
            <Text className="font-bold font-lg text-white">
              Button
            </Text>
          </Pressable>
        </View>
      </NavigationContainer>
    </>
  );
};

export default AppRoot;
