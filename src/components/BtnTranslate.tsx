import React from 'react';
import {Btn} from './Btn';
import {useLng} from '../hooks/useLng';
import {StyleSheet} from 'react-native';

export const BtnTranslate = () => {
  const {setLng} = useLng();
  return <Btn label="en/es" onPress={setLng} style={styles.btnTranslate} />;
};

const styles = StyleSheet.create({
  btnTranslate: {
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
});
