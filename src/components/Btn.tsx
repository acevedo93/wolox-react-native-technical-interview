import React from 'react';
import {TouchableOpacity, Text, StyleSheet, StyleProp} from 'react-native';
import {colors} from '../styles/colors';
import {globalStyles, BUTTON_BORDER_RADIUS} from '../styles/GlobalStyles';
import LinearGradient from 'react-native-linear-gradient';

export interface Props {
  label: string;
  onPress: () => any;
  disabled?: boolean;
  style?: StyleProp<any>;
  background?: boolean;
  gradient?: boolean;
  textColor?: string;
}

export const Btn = ({
  label,
  onPress,
  disabled = false,
  style = {},
  background = false,
  gradient,
  textColor,
}: Props) => {
  if (gradient) {
    return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        activeOpacity={0.8}
        style={[styles.btnGradient, style]}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 2}}
          colors={[colors.primaryShade, colors.tertiaryShade, colors.tertiary]}
          style={styles.gradient}>
          <Text
            style={[
              globalStyles.btnText,
              {
                opacity: disabled ? 0.8 : 1,
                color: !textColor
                  ? background
                    ? colors.light
                    : colors.primary
                  : textColor,
              },
            ]}>
            {label}
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.btn,
        style,
        {backgroundColor: background ? colors.primary : 'transparent'},
      ]}>
      <Text
        style={[
          globalStyles.btnText,
          {
            opacity: disabled ? 0.2 : 1,
            color: !textColor
              ? background
                ? colors.light
                : colors.primary
              : textColor,
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
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  btnGradient: {
    borderColor: colors.secondary,
    borderRadius: BUTTON_BORDER_RADIUS,
    marginBottom: 10,
  },
  gradient: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: BUTTON_BORDER_RADIUS,
  },
});
