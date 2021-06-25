import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Background} from '../../components/Background';
import {useNavigation} from '@react-navigation/core';
import {Logo} from '../../components/Logo';
import {Input} from '../../components/Input';

import {Btn} from '../../components/Btn';
import {useForm} from '../../hooks/useForm';

export const LoginScreen = () => {
  const navigation = useNavigation();
  const {onChange, name, lastName, email, date, termsAndConditions} = useForm({
    name: '',
    lastName: '',
    email: '',
    date: '',
    termsAndConditions: false,
  });
  const handlerLogin = () => {
    navigation.replace('HomeScreen');
  };
  return (
    <ScrollView>
      <Background />
      <View style={styles.formContainer}>
        <View style={styles.logoContainer}>
          <Logo />
        </View>
        <Input
          label="Nombre"
          placeholder="Ingrese su nombre"
          onchange={value => onChange(value, 'name')}
          type="text"
          value={name}
        />
        <Input
          label="Apellido"
          placeholder="Ingrese su Apellido"
          onchange={value => onChange(value, 'lastName')}
          type="text"
          value={lastName}
        />
        <Input
          label="Email"
          placeholder="Ingrese su email"
          onchange={value => onChange(value, 'email')}
          type="email"
          value={email}
        />
        <Input
          label="Edad"
          placeholder="Ingrese su edad"
          onchange={value => onChange(value, 'date')}
          type="date"
          value={date}
        />
        <Text>CheckBox de aceptacion de terminos y condiciones</Text>
        <View style={styles.btnContainer}>
          <Btn disabled={false} label="Login" onPress={handlerLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
});
