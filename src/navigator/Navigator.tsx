import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/private/HomeScreen';
import {LoginScreen} from '../screens/public/LoginScreen';
import {AuthContext} from '../context/auth/AuthContext';
import {LoadingScreen} from '../screens/public/LoadingScreen';
import {colors} from '../styles/colors';
import {NotificationsScreen} from '../screens/private/NotificationsScreen';
import {ProfileScreen} from '../screens/private/ProfileScreen';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useLng} from '../hooks/useLng';
import {BookDetailScreen} from '../screens/private/BookDetailScreen';
import {CommentsScreen} from '../screens/private/CommentsScreen';
import {SearchBtn} from '../components/SearchBtn';
import {screenOptions, tabBarOptions} from './navigatorOptions';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const Navigator = () => {
  const {status} = useContext(AuthContext);
  const {t} = useLng();

  if (status === 'loading') return <LoadingScreen />;
  const privateScreens = () => (
    <>
      <Stack.Screen
        options={{headerShown: false}}
        name="TabsScreens"
        component={TabsScreens}
      />
      <Stack.Screen
        options={{
          title: t('bookDetailScreen.headerTitle.label'),
          ...screenOptions,
        }}
        name="BookDetailScreen"
        component={BookDetailScreen}
      />
      <Stack.Screen
        options={{
          title: t('commentsScreen.headerTitle.label'),
          ...screenOptions,
        }}
        name="CommentsScreen"
        component={CommentsScreen}
      />
    </>
  );

  const TabsScreens = () => (
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

  const publicScreens = () => (
    <Stack.Screen
      options={{headerShown: false}}
      name="LoginScreen"
      component={LoginScreen}
    />
  );

  const HomeTab = () => (
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

  const ProfileTab = () => (
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
  const NotificationsTab = () => (
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

  return (
    <Stack.Navigator screenOptions={{screenOptions}}>
      {status !== 'authSuccess' ? publicScreens() : privateScreens()}
    </Stack.Navigator>
  );
};
