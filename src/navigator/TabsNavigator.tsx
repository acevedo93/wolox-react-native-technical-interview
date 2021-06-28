import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SearchBtn} from '../components/SearchBtn';
import {View} from 'react-native';
import {Icon} from 'react-native-vector-icons/Ionicons';
import {colors} from '../styles/colors';
import {HomeScreen} from '../screens/private/HomeScreen';
import {ProfileScreen} from '../screens/private/ProfileScreen';
import {NotificationsScreen} from '../screens/private/NotificationsScreen';
import {screenOptions} from './screenOptions';
import {tabBarOptions} from './tabBarOptions';
import {useLng} from '../hooks/useLng';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const HomeTab = () => {
  const {t} = useLng();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{
          title: t('homeScreen.headerTitle.label'),
          headerRight: () => {
            return <SearchBtn />;
          },
          headerLeft: () => {
            return (
              <View style={{marginLeft: 10}}>
                <Icon
                  color={colors.light}
                  name="notifications-outline"
                  size={30}
                />
              </View>
            );
          },
        }}
        name="HomeScreen"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};

const ProfileTab = () => {
  const {t} = useLng();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{
          title: t('profileScreen.headerTitle.label'),
        }}
        name="ProfileScreen"
        component={ProfileScreen}
      />
    </Stack.Navigator>
  );
};
const NotificationsTab = () => {
  const {t} = useLng();
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        options={{
          title: t('notificationsScreen.headerTitle.label'),
        }}
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export const TabsNavigator = () => {
  const {t} = useLng();
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        options={{
          tabBarLabel: t('bottomTab.home.label'),
          tabBarIcon: ({color}: any) => {
            return <Icon color={color} size={20} name="book-outline" />;
          },
        }}
        name="HomeTab"
        component={HomeTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: t('bottomTab.profile.label'),
          tabBarIcon: ({color}: any) => (
            <Icon color={color} size={20} name="person-outline" />
          ),
        }}
        name="ProfileTab"
        component={ProfileTab}
      />
      <Tab.Screen
        options={{
          tabBarLabel: t('bottomTab.notifications.label'),
          tabBarIcon: ({color}: any) => (
            <Icon color={color} size={20} name="notifications-outline" />
          ),
        }}
        name="NotificationsTab"
        component={NotificationsTab}
      />
    </Tab.Navigator>
  );
};
