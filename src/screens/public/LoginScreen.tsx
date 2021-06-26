import React, {useContext} from 'react';

import {LoginForm} from '../../components/LoginForm';
import {ScrollView, View, StyleSheet} from 'react-native';
import {BtnTranslate} from '../../components/BtnTranslate';

export const LoginScreen = () => {
  return (
    <ScrollView>
      <LoginForm />
      <View style={style.btnTranslate}>
        <BtnTranslate />
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  btnTranslate: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
});
