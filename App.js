import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardScreen from './components/OnBoardScreen';
import Location from './components/Location';
import HomePage from './components/HomePage';
import Toast from 'react-native-toast-message';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoard">
        <Stack.Screen name="OnBoard" component={OnBoardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
      <Toast ref={(ref) => Toast.setRef(ref)}/>
    </NavigationContainer>
  );
};

export default App;
