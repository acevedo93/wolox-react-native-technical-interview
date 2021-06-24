import React from 'react';
import {View, SafeAreaView} from 'react-native';

import {useBooksList} from '../../hooks/useBooksList';
export const HomeScreen = () => {
  const {loading, books} = useBooksList();

  console.log(books);
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};
