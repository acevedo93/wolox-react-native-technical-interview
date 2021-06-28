import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

export const Background = ({children}: any) => {
  return (
    <LinearGradient
      colors={[colors.primary, colors.primaryShade, colors.primaryTint]}
      style={styles.gradient}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
});
