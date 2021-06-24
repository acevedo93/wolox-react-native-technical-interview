import React from 'react';
import {View, Text, Button} from 'react-native';
import {Background} from '../../components/Background';

export const LoginScreen = () => {
  return (
    <View>
      <Background />
      <Text>Login</Text>
      <Text>Nombre</Text>
      <Text>Apellido</Text>
      <Text>Email</Text>
      <Text>Dropdown de edad</Text>
      <Text>CheckBox de aceptacion de terminos y condiciones</Text>
      <Button onPress={() => {}} title="LOGIN" />
    </View>
  );
};
