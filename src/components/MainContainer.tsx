import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../styles/colors';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainContainer = ({children}: Props) => {
  return (
    <View testID="main-container" style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 15,
  },
});
