import React from 'react';
import {StyleSheet, View} from 'react-native';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const MainContainer = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    paddingHorizontal: 10,
  },
});
