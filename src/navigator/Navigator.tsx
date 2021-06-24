import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/private/HomeScreen';
import {LoginScreen} from '../screens/public/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';

// export type RootStackParams = {
//   HomeScreen: undefined;
//   PokemonScreen: {simplePokemon: SimplePokemon; color: string};
// };

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
