import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {colors} from '../styles/colors';
import LinearGradient from 'react-native-linear-gradient';

export const Background = ({children}: any) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 0.0, y: 1}}
      colors={[colors.primary, colors.tertiaryShade, colors.tertiary]}
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
