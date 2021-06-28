import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Waves} from '../../components/Waves';
import {BtnTranslate} from '../../components/BtnTranslate';
export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Waves screenNumber={2} />

      <BtnTranslate />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
