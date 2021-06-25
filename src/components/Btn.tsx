import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export interface Props {
  label: string;
  onPress: () => any;
  disabled?: boolean;
}

export const Btn = ({label, onPress, disabled = false}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={styles.btn}>
      <Text style={[styles.btnText, {opacity: disabled ? 0.2 : 1}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderColor: 'white',
    borderRadius: 100,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
  },
});
