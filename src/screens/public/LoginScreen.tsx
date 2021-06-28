import React, {useContext} from 'react';

import {LoginForm} from '../../components/LoginForm';
import {ScrollView, View, StyleSheet} from 'react-native';
import {BtnTranslate} from '../../components/BtnTranslate';
import {Background} from '../../components/Background';

export const LoginScreen = () => {
  return (
    <Background>
      <ScrollView>
        <LoginForm />
        <View style={style.btnTranslate}>
          <BtnTranslate background={true} />
        </View>
      </ScrollView>
    </Background>
  );
};

const style = StyleSheet.create({
  btnTranslate: {
    position: 'absolute',
    top: 50,
    right: 30,
  },
});
