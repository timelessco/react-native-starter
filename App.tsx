import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text, View
} from 'react-native';
import { tailwind } from 'tailwind';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={tailwind('pt-12 items-center')}>
          <View style={tailwind('bg-blue-200 px-3 py-1 rounded-full')}>
            <Text style={tailwind('text-blue-800 font-semibold')}>
              Hello Tailwind !
				    </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
