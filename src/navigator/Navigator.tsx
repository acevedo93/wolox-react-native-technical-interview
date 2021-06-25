import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/private/HomeScreen';
import {LoginScreen} from '../screens/public/LoginScreen';
import {AuthContext} from '../context/auth/AuthContext';
import {LoadingScreen} from '../screens/public/LoadingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'loading') return <LoadingScreen />;

  const ProtectedScreens = () => (
    <Tab.Navigator>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {status !== 'authSuccess' ? (
        <>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </>
      ) : (
        <Stack.Screen name="ProtectedScreens" component={ProtectedScreens} />
      )}
    </Stack.Navigator>
  );
};
