import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../styles/colors';

export const Background = () => {
  return <View style={styles.background}></View>;
};

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    backgroundColor: colors.primary,
    flex: 1,
    width: 1000,
    height: 1200,
    top: -150,
    transform: [{rotate: '-40deg'}],
  },
});
