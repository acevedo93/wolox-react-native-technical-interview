import React from 'react';
import {View, TextInput, Platform, StyleSheet, Text} from 'react-native';

export interface Props {
  label?: string;
  placeholder: string;
  type: 'text' | 'date' | 'email';
  value: string;
  onchange: (value: string) => void;
}

export const Input = ({label = '', placeholder, onchange, value}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="rgba(255,255,255,0.4)"
        keyboardType="email-address"
        underlineColorAndroid="white"
        style={[
          styles.inputField,
          Platform.OS === 'ios' && styles.inputFieldIos,
        ]}
        selectionColor="white"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={value => onchange(value)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  inputField: {},
  inputFieldIos: {
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
});
