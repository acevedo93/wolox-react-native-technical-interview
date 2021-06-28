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
import {Platform, Button, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useLng} from '../hooks/useLng';
import {BookDetailScreen} from '../screens/private/BookDetailScreen';
import {CommentsScreen} from '../screens/private/CommentsScreen';
import {SearchBtn} from '../components/SearchBtn';

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
    alignSelf: Platform.OS === 'android' && 'center',
  },
  cardStyle: {
    backgroundColor: 'white',
  },
};
const tabBarOptions = {
  activeTintColor: colors.primaryTint,
  labelStyle: {
    marginBottom: Platform.OS === 'ios' ? 0 : 10,
  },

  headerTintColor: 'blue',
  style: {
    borderWidth: 0,
    elevation: 0,
    height: Platform.OS === 'ios' ? 80 : 60,
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.92)',
  },
};

export const Navigator = () => {
  const {status} = useContext(AuthContext);
  const {t} = useLng();

  if (status === 'loading') return <LoadingScreen />;

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
  return (
    <Stack.Navigator screenOptions={{screenOptions}}>
      {status == 'authSuccess' ? (
        <>
          <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={LoginScreen}
          />
        </>
      ) : (
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
      )}
    </Stack.Navigator>
  );
};

// return (
//   <Stack.Navigator screenOptions={screenOptions}>
//     <Stack.Screen
//       options={{headerShown: false}}
//       name="TabsScreens"
//       component={TabsScreens}
//     />

//   </Stack.Navigator>
// );
