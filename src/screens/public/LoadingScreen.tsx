import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Background} from '../../components/Background';

export const LoadingScreen = () => {
  return (
    <View style={styles.loadingContainer}>
      <Background />
      <ActivityIndicator size={50} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
