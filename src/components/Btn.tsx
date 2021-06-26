import React from 'react';
import {TouchableOpacity, Text, StyleSheet, StyleProp} from 'react-native';
import {colors} from '../styles/colors';

export interface Props {
  label: string;
  onPress: () => any;
  disabled?: boolean;
  style?: StyleProp<any>;
}

export const Btn = ({label, onPress, disabled = false, style = {}}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.btn, style]}>
      <Text style={[styles.btnText, {opacity: disabled ? 0.2 : 1}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderColor: colors.secondary,
    borderRadius: 100,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 7,
  },
  btnText: {
    fontSize: 20,
    color: colors.light,
  },
});
