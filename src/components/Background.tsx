import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Background = () => {
  return <View style={styles.background}></View>;
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: 'purple',
    flex: 1,
    width: 1000,
    height: 1200,
    top: -400,
    transform: [{rotate: '-70deg'}],
  },
});
