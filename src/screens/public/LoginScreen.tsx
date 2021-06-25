import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import {Background} from '../../components/Background';
import {Logo} from '../../components/Logo';
import {Input} from '../../components/Input';
import {Btn} from '../../components/Btn';
import {useForm} from '../../hooks/useForm';
import {AuthContext} from '../../context/auth/AuthContext';
import {useEffect} from 'react';

export const LoginScreen = () => {
  const {onChange, name, lastName, email, date, termsAndConditions} = useForm({
    name: '',
    lastName: '',
    email: '',
    date: '',
    termsAndConditions: false,
  });
  const {logIn, errorMsg, clearErrorMsg} = useContext(AuthContext);

  useEffect(() => {
    if (!errorMsg.length) return;
    Alert.alert('Login error', errorMsg, [
      {
        text: 'OK',
        onPress: clearErrorMsg,
      },
    ]);
  }, [errorMsg]);

  const handlerLogin = () => {
    logIn({
      email: 'fdsa',
      name: 'fdasf',
      lastName: '432432',
      id: 43143,
      date: '12321',
    });
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
          label="Tu Cumpleaños"
          placeholder="Ingrese su edad"
          onchange={value => onChange(value, 'date')}
          type="date"
          value={date}
        />
        <View style={styles.termsAndConditionsContainer}>
          <Input
            label="Aceptas terminos y condiciones"
            placeholder="Ingrese su edad"
            onchange={value => onChange(value, 'termsAndConditions')}
            type="checkBox"
            value={termsAndConditions}
          />
        </View>

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
  termsAndConditionsContainer: {
    marginTop: 20,
  },
});
