import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/private/HomeScreen';
import {LoginScreen} from '../screens/public/LoginScreen';
import {AuthContext} from '../context/auth/AuthContext';
import {LoadingScreen} from '../screens/public/LoadingScreen';
import {Background} from '../components/Background';
import {colors} from '../styles/colors';
import {NotificationsScreen} from '../screens/private/NotificationsScreen';
import {ProfileScreen} from '../screens/private/ProfileScreen';
import {Platform} from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    elevation: 0,
    shadowColor: 'transparent',
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.lightTint,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  cardStyle: {
    backgroundColor: colors.light,
  },
};
const tabBarOptions = {
  activeTintColor: colors.secondaryTint,
  labelStyle: {
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
  },
  style: {
    backgroundColor: colors.primary,
    borderWidth: 0,
    elevation: 0,
  },
};

export const Navigator = () => {
  const {status} = useContext(AuthContext);

  if (status === 'loading') return <LoadingScreen />;

  const HomeTab = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );

  const ProfileTab = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    </Stack.Navigator>
  );
  const NotificationsTab = () => (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );

  const ProtectedScreens = () => (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        options={{tabBarLabel: 'Inicio'}}
        name="HomeTab"
        component={HomeTab}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Perfil'}}
        name="ProfileTab"
        component={ProfileTab}
      />
      <Tab.Screen
        options={{tabBarLabel: 'Notificaciones'}}
        name="NotificationsTab"
        component={NotificationsTab}
      />
    </Tab.Navigator>
  );
  //   return (
  //     <Stack.Navigator
  //       screenOptions={{
  //         headerStyle: {
  //           elevation: 0,
  //           shadowColor: 'transparent',
  //           backgroundColor: colors.primary,
  //         },
  //         headerTintColor: colors.lightTint,
  //         headerTitleStyle: {
  //           fontWeight: 'bold',
  //         },
  //         cardStyle: {
  //           backgroundColor: colors.light,
  //         },
  //       }}>
  //       {status !== 'authSuccess' ? (
  //         <>
  //           <Stack.Screen
  //             options={{headerShown: false}}
  //             name="LoginScreen"
  //             component={LoginScreen}
  //           />
  //         </>
  //       ) : (
  //         <Stack.Screen
  //           options={{}}
  //           name="ProtectedScreens"
  //           component={ProtectedScreens}
  //         />
  //       )}
  //     </Stack.Navigator>
  //   );
  // };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{headerShown: false}}
        name="ProctedScreen"
        component={ProtectedScreens}
      />
    </Stack.Navigator>
  );
};
