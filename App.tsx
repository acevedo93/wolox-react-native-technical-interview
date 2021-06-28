import 'react-native-gesture-handler';
import React from 'react';
import {Navigator} from './src/navigator/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from './src/context/auth/AuthContext';
import {TranslateProvider} from './src/translations/TranslateProvider';
import {BooksProvider} from './src/context/books/BooksContext';

const GlobalState = ({children}: {children: JSX.Element | JSX.Element[]}) => (
  <TranslateProvider>
    <AuthProvider>
      <BooksProvider>{children}</BooksProvider>
    </AuthProvider>
  </TranslateProvider>
);

export const App = () => {
  return (
    <NavigationContainer>
      <GlobalState>
        <Navigator />
      </GlobalState>
    </NavigationContainer>
  );
};
