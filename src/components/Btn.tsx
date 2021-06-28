import React from 'react';
import {TouchableOpacity, Text, StyleSheet, StyleProp} from 'react-native';
import {colors} from '../styles/colors';
import {globalStyles, BUTTON_BORDER_RADIUS} from '../styles/GlobalStyles';

export interface Props {
  label: string;
  onPress: () => any;
  disabled?: boolean;
  style?: StyleProp<any>;
  background?: boolean;
}

export const Btn = ({
  label,
  onPress,
  disabled = false,
  style = {},
  background = false,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.btn,
        style,
        {backgroundColor: background ? colors.primary : 'trasparent'},
      ]}>
      <Text
        style={[
          globalStyles.btnText,
          {
            opacity: disabled ? 0.2 : 1,
            color: background ? colors.light : colors.primary,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    borderColor: colors.secondary,
    borderRadius: BUTTON_BORDER_RADIUS,
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 7,
    marginBottom: 10,
  },
});
