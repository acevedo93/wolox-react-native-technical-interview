import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {Waves} from '../../components/Waves';
import {BtnTranslate} from '../../components/BtnTranslate';
import {Btn} from '../../components/Btn';
import {AuthContext} from '../../context/auth/AuthContext';
import {useLng} from '../../hooks/useLng';
import {MainContainer} from '../../components/MainContainer';
import {globalStyles} from '../../styles/GlobalStyles';

export const ProfileScreen = () => {
  const {logOut} = useContext(AuthContext);
  const {t} = useLng();
  return (
    <MainContainer>
      <Waves />
      <Text style={globalStyles.title}>Profile</Text>
      <View style={globalStyles.verticalSpaces}>
        <BtnTranslate />
        <Btn onPress={logOut} label={t('btnLogout.label')} />
      </View>
    </MainContainer>
  );
};
